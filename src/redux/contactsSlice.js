import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    saveContact(state, action) {
      state.contacts.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { saveContact, deleteContact, changeFilter } =
  contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, contactsReduser);
