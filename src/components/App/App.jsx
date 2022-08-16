import { GlobalStyle } from 'components/GlobalStyle';
import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const checkContact = name => {
    return contacts.some(contact => contact.name === name);
  };

  const saveContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const renderList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm saveContact={saveContact} checkContact={checkContact} />
      <h2>Contacts</h2>
      <Filter currentFilter={filter} onChange={changeFilter} />
      <ContactList contacts={renderList} deleteContact={deleteContact} />
    </Container>
  );
};
