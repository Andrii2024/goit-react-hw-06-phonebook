import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
  selectors: {
    selectContacts: state => state.items,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
// export const selectFilter = state => state.filter;
export default contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
