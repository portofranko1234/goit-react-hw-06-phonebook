import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactListItem from "../ContactListItem/ContactListItem";
import contactsOperations from "../Redux/Contacts/Operations";
import { getVisibleContacts } from "../Redux/Contacts/Selectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeletContact = (id) => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeletContact={() => onDeletContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
