import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components/Form/Form.styled';
import { useDeleteContactsMutation } from 'redux/contactsSlice';
import { useEffect, useState } from 'react';
import { SpinnerForButton } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { ModalUpdateContact } from 'components/ModalUpdateContact/ModalUpdate';

export const Contact = ({ contact }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const [deleteContact, result] = useDeleteContactsMutation();

  const { isError, isLoading, isSuccess } = result;

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${contact?.name} was removed from your phonebook.`);
    }
  }, [contact?.name, isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(`We can't remove a contact.`);
    }
  }, [isError]);

  return (
    <ListItem>
      <b>{contact.name}</b>: <span>{contact.number}</span>
      <Button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerForButton /> : 'Delete'}
      </Button>
      <Button
        type="button"
        onClick={() => setIsModalShown(true)}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerForButton /> : 'Update'}
      </Button>
      {isModalShown && (
        <ModalUpdateContact
          contact={contact}
          close={() => setIsModalShown(false)}
        />
      )}
    </ListItem>
  );
};

const ListItem = styled.li`
  margin: 10px 0;
`;

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
