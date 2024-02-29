import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/phonebook/filtersSlice';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { StyledWrapper } from './App.styled';
import {
  addContact,
  deleteContact,
  selectContacts,
  selectFilter,
} from '../redux/phonebook/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(addContact(JSON.parse(storedContacts)));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };
  const handleDeleteUser = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <StyledWrapper>
      <h1>Phone Book</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onClickDelete={handleDeleteUser}
      />
    </StyledWrapper>
  );
};
