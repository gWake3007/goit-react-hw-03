import "./App.css";
import { useState } from "react";
import contactsJS from "./contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(contactsJS);
  const [search, setSearch] = useState("");
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContact} />
    </div>
  );
}

export default App;
