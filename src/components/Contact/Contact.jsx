import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {contact.name}: <span>{contact.number}</span>
      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </ListItem>
  );
};

const ListItem = styled.li`
  margin: 8px 0;
`;

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
