import React from 'react';
import { StyledButtonList, StyledLi } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  selectContacts,
} from '../redux/phonebook/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <StyledLi key={contact.id}>
          {contact.name} - {contact.number}
          <StyledButtonList onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </StyledButtonList>
        </StyledLi>
      ))}
    </ul>
  );
};
