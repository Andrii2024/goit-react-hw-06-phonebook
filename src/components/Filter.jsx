import React, { useState } from 'react';
import { StyledInput, StyledLabel } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from '../redux/phonebook/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const [localFilter, setLocalFilter] = useState(filter);

  const handleInputChange = e => {
    const value = e.target.value.toLowerCase();
    console.log('Local filter value:', value);
    setLocalFilter(value);
    dispatch(setFilter(value));
  };
  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={localFilter}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};
