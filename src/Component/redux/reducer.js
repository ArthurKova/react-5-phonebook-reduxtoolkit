import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const setFilter = createAction('filter/Set');
const addContact = createAction('contact/Add');
const removeContact = createAction('contact/Remove');

const formReducer = createReducer(initialState, builder => {
  builder
    .addCase(setFilter, ({ contacts }, { payload }) => {
      contacts.filter = payload;
    })
    .addCase(addContact, ({ contacts }, { payload }) => {
      contacts.items.push(payload);
    })
    .addCase(removeContact, ({ contacts }, { payload }) => {
      contacts.items.splice(
        contacts.items.findIndex(a => a.id === payload),
        1
      );
    });
});

export { formReducer, setFilter, addContact, removeContact };
