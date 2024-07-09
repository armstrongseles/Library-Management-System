import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Required'),
    author: Yup.string().required('Required'),
    isbn: Yup.string().required('Required'),
    publicationDate: Yup.date().required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form style={styles.form}>
        <div style={styles.field}>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" style={styles.input} />
          <ErrorMessage name="title" component="div" style={styles.error} />
        </div>
        <div style={styles.field}>
          <label htmlFor="author">Author</label>
          <Field id="author" name="author" placeholder="Author" style={styles.input} />
          <ErrorMessage name="author" component="div" style={styles.error} />
        </div>
        <div style={styles.field}>
          <label htmlFor="isbn">ISBN</label>
          <Field id="isbn" name="isbn" placeholder="ISBN" style={styles.input} />
          <ErrorMessage name="isbn" component="div" style={styles.error} />
        </div>
        <div style={styles.field}>
          <label htmlFor="publicationDate">Publication Date</label>
          <Field id="publicationDate" name="publicationDate" type="date" style={styles.input} />
          <ErrorMessage name="publicationDate" component="div" style={styles.error} />
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

export default BookForm;
