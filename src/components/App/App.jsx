import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from 'redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Toaster />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </Provider>
  );
};
