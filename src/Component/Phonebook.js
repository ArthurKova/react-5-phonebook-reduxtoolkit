import React from 'react';
import ContactForm from './ContactForm/';
import Filter from './Filter/';
import ContactList from './ContactList/';
import propTypes from 'prop-types';
import './Phonebook.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import * as action from './redux/reducer';

const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleInputFilterChange = e => {
    dispatch(action.setFilter(e.currentTarget.value));
  };

  const formSubmit = contactData => {
    if (isExistingContact(contactData.name)) {
      return alert(contactData.name + 'is already in contacts');
    }
    dispatch(action.addContact(contactData));
  };

  const isExistingContact = name => {
    const newName = name.toLowerCase();
    return contacts.find(contact => contact.name.toLowerCase() === newName);
  };

  const filtredContacts = () => {
    const filterRequest = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterRequest)
    );
  };

  const removeContact = id => {
    dispatch(action.removeContact(id));
  };

  return (
    <div className="page-box">
      <h1>Phonebook</h1>
      <ContactForm formSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleInputChange={handleInputFilterChange} />
      <ContactList
        filtredContacts={filtredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};

Phonebook.propTypes = {
  data: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
  id: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};

export default Phonebook;
