// import { Input } from 'components/Form/Form.styled';
import { Form } from 'react-bootstrap';
import { FilterContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const { data: contacts } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);

  return (
    contacts && (
      <FilterContainer>
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
          placeholder="Start enter name"
        />
      </FilterContainer>
    )
  );
};

// {
//   /* //       (
// //   contacts && (
// //     <FilterContainer>
// //       <p>Find contacts by name</p>
// //       <Input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={e => dispatch(changeFilter(e.target.value))}
//       />
//     </FilterContainer>
//   )
// ) */
// }
