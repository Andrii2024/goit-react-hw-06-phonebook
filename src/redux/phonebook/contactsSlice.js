import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts, selectFilter } = contactsSlice.selectors;
export default contactsSlice.reducer;
