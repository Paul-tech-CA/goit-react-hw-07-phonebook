import React from "react";
import Contact from "./contact/Contact";
import style from "../App.module.css";

const ContactsList = ({ contactList, onHandleRemove }) => {
  return (
    <div className={style.contactsList}>
      <ul className={style.list}>
        {contactList.map((contact) => (
          <Contact
            {...contact}
            key={contact.id}
            onHandleRemove={onHandleRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
