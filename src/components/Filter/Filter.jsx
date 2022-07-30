import PropTypes from 'prop-types';
import { Input } from 'components/Form/Form.styled';
import { FilterContainer } from './Filter.styled';

export const Filter = ({ currentFilter, onChange }) => {
  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <Input
        type="text"
        name="filter"
        value={currentFilter}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  currentFilter: PropTypes.string,
  onChange: PropTypes.func,
};
