import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components/Form/Form.styled';

export const Contact = ({ contact, deleteContact }) => {
  return (
    <ListItem>
      {contact.name}: <span>{contact.number}</span>
      <Button type="button" onClick={() => deleteContact(contact.id)}>
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
  deleteContact: PropTypes.func,
};
