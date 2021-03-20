import React from 'react';
import Contact from './contact/Contact';
import style from '../App.module.css';
import { connect } from 'react-redux';
import { deleteNumber } from '../../redux/phoneBook/phoneBook.operations';
import { getFilteredNumbers } from '../../redux/phoneBook/phoneBook.selector';

const ContactsList = ({ contactList, onHandleRemove }) => {
  //???? am I right?

  const contactDelete = () => onHandleRemove;

  return (
    <div className={style.contactsList}>
      <ul className={style.list}>
        {contactList.map(contact => (
          <Contact
            {...contact}
            key={contact.id}
            onHandleRemove={contactDelete(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  contactList: getFilteredNumbers(state),
});

const mapDispatchToProps = {
  onHandleRemove: deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
