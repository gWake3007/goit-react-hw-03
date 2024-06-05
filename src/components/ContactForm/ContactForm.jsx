import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik>
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <br />
          <Field
            className={css.input}
            id={nameId}
            type="text"
            name="username"
          />
          <ErrorMessage
            className={css.error}
            component="span"
            name="username"
          />
        </div>
        <div className={css.container}>
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <br />
          <Field
            className={css.input}
            id={phoneId}
            type="text"
            name="userphone"
          />
          <ErrorMessage
            className={css.error}
            component="span"
            name="userphone"
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
