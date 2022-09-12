import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Form, Input, Button } from './Form.styled';
import { useAddContactsMutation } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { SpinnerForButton } from 'components/Spinner/Spinner';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();

  const [addContact, { isLoading, isError, isSuccess, data }] =
    useAddContactsMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`${data.name} is added to your phonebook.`);
    }
  }, [isSuccess, data?.name]);

  useEffect(() => {
    if (isError) {
      toast.error(`We can't add a new contact.`);
    }
  }, [isError]);

  const onChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      toast(`${name} is already  in contacts`);
      return;
    }

    const newContact = {
      createdAt: new Date(),
      name: name,
      phone: number,
    };
    addContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <SpinnerForButton /> : 'Add contact'}
      </Button>
    </Form>
  );
};
