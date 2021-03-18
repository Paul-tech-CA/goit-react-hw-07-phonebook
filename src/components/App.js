import React from 'react';
import { connect } from 'react-redux';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm.jsx';
import ContactsList from './contactsList/ContactsList';
import FilterList from './filterList/FilterList';
import {
  addNumber,
  deleteNumber,
  filteredNumber,
} from '../redux/phoneBook/phoneBook.actions';

const App = ({
  addNumber,
  deleteNumberByID,
  filteredItems,
  items,
  filter,
  filteredNumber,
}) => {
  const addContact = contact => {
    if (items.some(item => item.name === contact.name)) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    addNumber(contact);
  };

  return (
    <div className={style.container}>
      <h2> Phonebook </h2> <ContactForm addContact={addContact} />
      <h2> Contacts </h2>
      <FilterList filter={filter} onFilterHandleChange={filteredNumber} />
      <ContactsList
        contactList={filteredItems}
        onHandleRemove={deleteNumberByID}
      />
    </div>
  );
};

const mapStateToProps = ({ contacts: { number, filter, contactList } }) => {
  const getFilteredContacts = () => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return {
    number,
    filter,
    filteredItems: getFilteredContacts(),
    items: contactList,
  };
};

const mapDispatchToProps = {
  deleteNumberByID: deleteNumber,
  addNumber,
  filteredNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
