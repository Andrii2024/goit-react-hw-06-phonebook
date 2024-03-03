import React from 'react';
import { StyledInput, StyledLabel } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from '../redux/phonebook/contactsSlice';
import { selectFilter, setFilter } from '../redux/phonebook/filtersSlice';

export const Filter = ({ onChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };
  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledLabel>
  );
};
