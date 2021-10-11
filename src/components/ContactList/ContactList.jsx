import { useSelector, useDispatch } from "react-redux";

import { getFiltredContacts } from "../Redux/Contacts/contacts-selectors";

import actions from "../Redux/Contacts/contacts-action";

const ContactList = () => {
  const contact = useSelector(getFiltredContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contact.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}
            <span>{number}</span>
          </p>
          <button
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
