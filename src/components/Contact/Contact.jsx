import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components/Form/Form.styled';
import { useDeleteContactsMutation } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { SpinnerForButton } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';

export const Contact = ({ contact }) => {
  const [deleteContact, { isError, isLoading, isSuccess, data }] =
    useDeleteContactsMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${data?.name} was removed from your phonebook.`);
    }
  }, [isSuccess, data?.name]);

  useEffect(() => {
    if (isError) {
      toast.error(`We can't remove a contact.`);
    }
  }, [isError]);

  return (
    <ListItem>
      <b>{contact.name}</b>: <span>{contact.phone}</span>
      <Button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isLoading}
      >
        {isLoading ? <SpinnerForButton /> : 'Delete'}
      </Button>
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
    phone: PropTypes.string.isRequired,
  }),
};
