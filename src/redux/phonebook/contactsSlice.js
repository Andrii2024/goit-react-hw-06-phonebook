import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: 'all' },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    selectContacts: state => state.items,
    selectFilter: state => state.filter,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectFilter = state => state.filter.filter;
export default contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
