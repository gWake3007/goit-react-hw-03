import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ datalist }) => {
  return (
    <ul className={css.list}>
      {datalist.map((data) => (
        <li className={css.item} key={data.id}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
