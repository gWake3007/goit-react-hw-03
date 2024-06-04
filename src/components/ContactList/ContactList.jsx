import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  return (
    <div className={css.container}>
      <Contact></Contact>
    </div>
  );
};

export default ContactList;
