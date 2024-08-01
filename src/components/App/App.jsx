import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => {
    state.contacts.loading;
  });
  const isError = useSelector((state) => {
    state.contacts.error;
  });

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <Loader />}
      {isError && <ErrorMessage message={"Sorry! Something get wrong!"} />}
    </div>
  );
}
