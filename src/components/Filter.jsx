import React from 'react';
import { StyledInput, StyledLabel } from './App.styled';
import { useDispatch } from 'react-redux';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  return (
    <StyledLabel>
      Find contacts by name:
      <StyledInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
  );
};
