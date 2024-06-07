import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    username: "",
    userphone: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    userphone: Yup.string().required("Required"),
  });
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      username: values.username,
      userphone: values.userphone,
    });
    console.log(values);
    actions.resetForm();
  };
  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
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
            type="tel"
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
