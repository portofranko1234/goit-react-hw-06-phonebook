import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter";
import contactsOperations from "./components/Redux/Contacts/Operations";
import Loader from "react-loader-spinner";
import { isContactLoading } from "./components/Redux/Contacts/Selectors";

const App = () => {
  const isLoadingContacts = useSelector(isContactLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <ContactList />
    </div>
  );
};

export default App;
