import css from "./SearchBox.module.css";
import { Field } from "formik";

const SearchBox = () => {
  return (
    <>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <br />
      <Field className={css.input} id="search" type="text" name="searchUser" />
    </>
  );
};

export default SearchBox;
