import { GlobalStyle } from 'components/GlobalStyle';
import { Component } from 'react';
import { Container } from './App.styled';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  checkContact = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  saveContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const renderList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm
          saveContact={this.saveContact}
          checkContact={this.checkContact}
        />
        <h2>Contacts</h2>
        <Filter currentFilter={filter} onChange={this.changeFilter} />
        <ContactList contacts={renderList} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}
