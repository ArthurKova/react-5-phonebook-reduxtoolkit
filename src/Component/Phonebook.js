import React, { useState } from 'react';
import ContactForm from './ContactForm/';
import ContactList from './ContactList/';
import Filter from './Filter/Filter';
import propTypes from 'prop-types';
import './Phonebook.css';
import { useGetAllPhonebookQuery } from 'redux/phonebook/phonebookApi';

const Phonebook = () => {
  const [filter, setFilter] = useState('');
  const { data } = useGetAllPhonebookQuery();

  const handleInputFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filtredContacts = () => {
    const filterRequest = filter.toLowerCase();
    return data?.filter(contact =>
      contact.name.toLowerCase().includes(filterRequest)
    );
  };

  return (
    <div className="page-box">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleInputChange={handleInputFilterChange} />
      <ContactList contacts={filtredContacts()} />
    </div>
  );
};

Phonebook.propTypes = {
  data: propTypes.oneOfType([propTypes.string, propTypes.number]),
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default Phonebook;
