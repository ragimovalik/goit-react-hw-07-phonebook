import { createSlice } from '@reduxjs/toolkit';

// const storedData = localStorage.getItem('al-phonebook');
// const parsedData = JSON.parse(storedData);

// const initialContacts = parsedData?.length >= 1 ? parsedData : [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },

  reducers: {
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),

    deleteContact: (state, action) => ({
      ...state,
      items: state.items.filter(contact => contact.id !== action.payload),
    }),

    setFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
