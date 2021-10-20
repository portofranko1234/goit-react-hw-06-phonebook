import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts.items;
export const getFilterValue = (state) => state.contacts.filter;
export const isContactLoading = (state) => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
