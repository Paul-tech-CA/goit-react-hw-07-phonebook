import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm.jsx';
import ContactsList from './contactsList/ContactsList';
import FilterList from './filterList/FilterList';

import { fetchNumbers } from '../redux/phoneBook/phoneBook.operations';
import { getLoading } from '../redux/phoneBook/phoneBook.selector';
import Loader from './loader/Loader';

class App extends PureComponent {
  componentDidMount() {
    this.props.fetchNumbers();
  }

  render() {
    return (
      <div className={style.container}>
        <h2> Phonebook </h2> <ContactForm />
        {!this.props.isLoading ? (
          <>
            <h2> Contacts </h2>
            <FilterList />
            <ContactsList />
          </>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  fetchNumbers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
