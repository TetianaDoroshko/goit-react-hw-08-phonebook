import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Card, Container } from 'react-bootstrap';
import { Block, ContainerContacts } from 'components/App/App.styled';
import { AddContactBlock } from 'components/AddContactBlock/AddContactBlock';

export const ContactsPage = () => {
  return (
    <ContainerContacts fluid="md">
      <AddContactBlock />

      <Block>
        <Card.Body>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Card.Body>
      </Block>
    </ContainerContacts>
  );
};
