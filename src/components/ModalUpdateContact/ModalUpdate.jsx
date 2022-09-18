import { useState } from 'react';
import { useUpdateContactsMutation } from 'redux/contactsSlice';
// import { Form, Input, Button } from 'components/Form/Form.styled';
import toast from 'react-hot-toast';
import { Modal, Form, Button, Stack } from 'react-bootstrap';

export const ModalUpdateContact = ({ contact, close, isShown }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const [updateContacts, { isLoading }] = useUpdateContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();
    updateContacts({ id: contact.id, user: { name, number } })
      .then(() => toast.success(`${name} was updated in your phonebook.`))
      .catch(() => toast.error(`Error happend. We can't update the contact.`));
    close();
  };

  return (
    <Modal show={isShown} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Update contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="Enter number"
            />
          </Form.Group>
          <Stack gap={2} className="col-md-12 mx-auto">
            <Button
              type="submit"
              variant="outline-primary"
              disabled={isLoading}
            >
              Update contact
            </Button>
            <Button type="button" variant="outline-primary" onClick={close}>
              Cancel
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

// {/* <div>
//   <h1>Update contact</h1>
//   <Form onSubmit={handleSubmit}>
//     <label>
//       Name
//       <Input
//         type="text"
//         name="name"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </label>
//     <label>
//       Number
//       <Input
//         type="tel"
//         name="number"
//         value={number}
//         onChange={e => setNumber(e.target.value)}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//     </label>
//     <Button type="submit" disabled={isLoading}>
//       Update contact
//     </Button>
//     <Button type="button" onClick={close}>
//       Cancel
//     </Button>
//   </Form>
// </div>; */}
