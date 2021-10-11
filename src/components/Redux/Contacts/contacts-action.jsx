import shortId from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/Add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortId.generate(),
    },
  };
});

const deleteContact = createAction("contacts/Delete");

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
