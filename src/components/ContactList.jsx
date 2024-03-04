import React, { useMemo } from 'react';
import { StyledButtonList, StyledLi } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  selectContacts,
} from '../redux/phonebook/contactsSlice';
import { selectFilter } from '../redux/phonebook/filtersSlice';
import { Notification } from './Notific';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [contacts, filter]);

  return (
    <>
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <StyledLi key={contact.id}>
              {contact.name} - {contact.number}
              <StyledButtonList
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </StyledButtonList>
            </StyledLi>
          ))}
        </ul>
      )}
    </>
  );
};
