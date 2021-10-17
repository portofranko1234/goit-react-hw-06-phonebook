import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  changeFilter,
} from "../Contacts/contacts-actions";

const items = createReducer([], {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactError]: (_, action) => action.payload,
  [fetchContactRequest]: () => null,
  [addContactRequest]: () => null,
  [deleteContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [addContactError]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
