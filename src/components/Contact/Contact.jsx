import PropTypes from 'prop-types';
import { useDeleteContactsMutation } from 'redux/contactsSlice';
import { useEffect, useState } from 'react';
import { SpinnerForButton } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { ModalUpdateContact } from 'components/ModalUpdateContact/ModalUpdate';
import { ListGroup, Button, Stack } from 'react-bootstrap';

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
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{contact.name}</div>
        {contact.number}
      </div>
      <Stack direction="horizontal" gap={1}>
        <Button
          variant="outline-primary"
          type="button"
          onClick={() => deleteContact(contact.id)}
          disabled={isLoading}
        >
          {isLoading ? <SpinnerForButton /> : 'Delete'}
        </Button>
        <Button
          variant="outline-primary"
          type="button"
          onClick={() => setIsModalShown(true)}
          disabled={isLoading}
        >
          {isLoading ? <SpinnerForButton /> : 'Update'}
        </Button>
      </Stack>
      {isModalShown && (
        <ModalUpdateContact
          contact={contact}
          close={() => setIsModalShown(false)}
          isShown={isModalShown}
        />
      )}
    </ListGroup.Item>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

// {
//   /* <ListItem>
//   <b>{contact.name}</b>: <span>{contact.number}</span>
//   <Button
//     type="button"
//     onClick={() => deleteContact(contact.id)}
//     disabled={isLoading}
//   >
//     {isLoading ? <SpinnerForButton /> : 'Delete'}
//   </Button>
//   <Button
//     type="button"
//     onClick={() => setIsModalShown(true)}
//     disabled={isLoading}
//   >
//     {isLoading ? <SpinnerForButton /> : 'Update'}
//   </Button>
//   {isModalShown && (
//     <ModalUpdateContact
//       contact={contact}
//       close={() => setIsModalShown(false)}
//       isShown={isModalShown}
//     />
//   )}
// </ListItem>; */
// }
