import { Input } from 'components/Form/Form.styled';
import { FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  return (
    contacts.length > 0 && (
      <FilterContainer>
        <p>Find contacts by name</p>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </FilterContainer>
    )
  );
};
