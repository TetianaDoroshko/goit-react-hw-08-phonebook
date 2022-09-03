import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const renderList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(renderList);

  return (
    renderList.length > 0 && (
      <ul>
        {renderList.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    )
  );
};
