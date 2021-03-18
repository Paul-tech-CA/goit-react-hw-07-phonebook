import React, { Component } from "react";
import style from '../App.module.css';

const initialState = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...initialState };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...initialState });
  };
  

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.onHandleSubmit}>
        <p className={style.inputName}> Name</p> 
        <label className={style.label}>        
          <input
            type="text"
            name="name"
            className={style.input}
            value={name}
            onChange={this.onHandleChange}
          />
        </label >
        <p className={style.inputName}> Number</p>
        <label className={style.label}>
          
          <input
            type="number"
            name="number"
            className={style.input}
            value={number}
            onChange={this.onHandleChange}
          />
        </label>
        <button className={style.buttonAdd}  type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
