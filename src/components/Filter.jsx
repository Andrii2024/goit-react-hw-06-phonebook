import React from 'react';
import { StyledInput, StyledLabel } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from '../redux/phonebook/contactsSlice';
import { selectFilter, setFilter } from '../redux/phonebook/filtersSlice';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);

  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={() => dispatch(setFilter(value))}
      />
    </StyledLabel>
  );
};
