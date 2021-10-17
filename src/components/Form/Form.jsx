import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../Redux/Contacts/contacts-selectors';
import { addContact } from '../Redux/Contacts/contacts-operations';


function ContactForm() {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
   const onSubmit = (name, number) =>
    dispatch(addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactCheck = () => {
    const namesIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
      alert(`${name}${number} Already exist`);
    }

    if (name === '' || number === '') {
      alert('Not enough data');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    if (contactCheck()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} >
      <label >
        Name:
          <input
          type="text"
          name="name"
          value={name}
          placeholder="Jack Sparrow"
          onChange={event => setName(event.currentTarget.value)}
          
        />
      </label>

      <label >
        Number:
          <input
          type="tel"
          name="number"
          value={number}
          placeholder="111-11-11"
          onChange={event => setNumber(event.currentTarget.value)}
          
        />
      </label>
      <button type="submit" >
        Add contact
        </button>
    </form>
  );
}

export default ContactForm;