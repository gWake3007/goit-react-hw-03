import css from "./SearchBox.module.css";
import { Field } from "formik";

const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <br />
      <Field
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
