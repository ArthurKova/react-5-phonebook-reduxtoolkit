import React from 'react';
import './ContactList.css';
import propTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phonebook/phonebookApi';

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className="page__list">
      {contacts?.map(contact => {
        const { name, phone, id } = contact;
        return (
          <li key={id} className="page__item">
            <p>
              {name}: <br /> {phone}
            </p>
            <button onClick={() => deleteContact(id)} className="page__button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContacts: propTypes.array,
};

export default ContactList;
