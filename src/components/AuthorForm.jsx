import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    biography: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Name" style={styles.input} />
          <ErrorMessage name="name" component="div" style={styles.error} />
        </div>
        <div style={styles.field}>
          <label htmlFor="birthDate">Birth Date</label>
          <Field id="birthDate" name="birthDate" type="date" style={styles.input} />
          <ErrorMessage name="birthDate" component="div" style={styles.error} />
        </div>
        <div style={styles.field}>
          <label htmlFor="biography">Biography</label>
          <Field id="biography" name="biography" placeholder="Biography" style={styles.input} />
          <ErrorMessage name="biography" component="div" style={styles.error} />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </Form>
    </Formik>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  error: {
    color: 'red',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '16px',
  },
};

export default AuthorForm;
