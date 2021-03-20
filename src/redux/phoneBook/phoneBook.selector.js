import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getContactList = state => state.contacts.contactList;

const getLoading = state => state.contacts.loading;

const getFilteredNumbers = createSelector(
  [getContactList, getFilter],
  (contactList, filter) =>
    contactList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export { getFilter, getLoading, getFilteredNumbers };
