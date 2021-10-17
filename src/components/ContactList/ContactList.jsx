import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../Redux/Contacts/contacts-selectors";
import * as operations from '../Redux/Contacts/contacts-operations';

function ContactList() {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          <p >
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
