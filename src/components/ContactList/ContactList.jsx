import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useMemo, useEffect } from 'react';
import { Spinner } from 'components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { ListGroup } from 'react-bootstrap';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);

  const {
    data: contacts,
    error,
    isLoading,
  } = useGetContactsQuery(null, { refetchOnMountOrArgChange: true });

  const renderList = useMemo(
    () =>
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? [],
    [contacts, filter]
  );
  useEffect(() => {
    if (error) {
      toast.error(
        `We couldn'n get your contacts. Try again later. Error code: ${error.status}`
      );
    }
    return;
  }, [error]);

  return (
    <>
      {isLoading && <Spinner />}
      {renderList.length > 0 && (
        <ListGroup as="ul">
          {renderList?.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ListGroup>
      )}
    </>
  );
};

{
  /* (
    <>
      {isLoading && <Spinner />}
      {renderList.length > 0 && (
        <ul>
          {renderList?.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  ); */
}
