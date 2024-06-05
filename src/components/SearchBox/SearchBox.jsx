import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <br />
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
