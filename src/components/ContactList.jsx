import React from 'react';
import { StyledButtonList, StyledLi } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  selectContacts,
} from '../redux/phonebook/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <StyledLi key={contact.id}>
          {contact.name} - {contact.number}
          <StyledButtonList onClick={() => handleDelete(contact.id)}>
            Delete
          </StyledButtonList>
        </StyledLi>
      ))}
    </ul>
  );
};
// import React from 'react';
// import { StyledButtonList, StyledLi } from './App.styled';

// export const ContactList = ({ contacts, onClickDelete }) => (
//   <ul>
//     {contacts.map(contact => (
//       <StyledLi key={contact.id}>
//         {contact.name} - {contact.number}
//         <StyledButtonList onClick={() => onClickDelete(contact.id)}>
//           Delate
//         </StyledButtonList>
//       </StyledLi>
//     ))}
//   </ul>
// );
// =============================
