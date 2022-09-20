import { ContactForm } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
