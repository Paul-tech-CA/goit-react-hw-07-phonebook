import React from "react";
import style from "../../App.module.css";



const Contact = ({ id, name, number, onHandleRemove }) => {
 
  return (
    <li className={style.contact}>
      <p className={style.contactName}>- {name}:</p>
      <p>{number}</p>
      <button className={style.button} onClick={() => onHandleRemove(id)}>Delete</button>
      {/* <button className={style.button} data-id={id} onClick={onHandleRemove}>Delete</button> */}
    </li>
  );
};

export default Contact;
