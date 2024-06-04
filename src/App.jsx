import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contact, setContact] = useState(contacts);
  const [search, setSearch] = useState("");
  const visibleContact = contacts.filter((contact) =>
    contact.text.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={contact} visibleContacts={visibleContact} />
    </div>
  );
}

export default App;
