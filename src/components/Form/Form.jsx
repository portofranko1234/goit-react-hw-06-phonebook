import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../Redux/Contacts/contacts-selectors";
import actions from "../Redux/Contacts/contacts-action";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const contactExist = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExist) {
      setName("");
      setNumber("");
      alert(`${name} already exsist at phonebook `);
      return;
    }

    dispatch(actions.addContact({ name, number }));
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          onChange={onInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Phone
        <input
          value={number}
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Add contacts</button>
    </form>
  );
};

export default ContactForm;
