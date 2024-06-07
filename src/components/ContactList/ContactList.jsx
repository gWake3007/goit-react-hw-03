import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ datalist }) => {
  return (
    <ul className={css.list}>
      {datalist.map((data) => (
        <Contact data={data} key={data.id} />
      ))}
    </ul>
  );
};

export default ContactList;
