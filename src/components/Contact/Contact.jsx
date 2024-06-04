import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({ data }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.stroke}>
          <FaUser />
          <h4 className={css.title}>{data.name}</h4>
        </div>
        <div className={css.stroke}>
          <BsFillTelephoneFill />
          <p className={css.text}>{data.number}</p>
        </div>
      </div>
      <div className={css.containerBtn}>
        <button className={css.btn} type="button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
