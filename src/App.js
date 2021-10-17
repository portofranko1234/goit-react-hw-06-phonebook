import ContactForm from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
