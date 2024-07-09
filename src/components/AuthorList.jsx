import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div style={styles.container}>
      <h2>Authors</h2>
      {authors.map((author) => (
        <div key={author.name} style={styles.item}>
          <div>
            <strong>{author.name}</strong>
          </div>
          <div>Born: {author.birthDate}</div>
          <div>{author.biography}</div>
          <div style={styles.buttons}>
            <button onClick={() => onEdit(author)} style={styles.editButton}>Edit</button>
            <button onClick={() => onDelete(author.name)} style={styles.deleteButton}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    margin: '20px',
  },
  item: {
    border: '1px solid #ccc',
    padding: '10px',
    width: '300px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  editButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default AuthorList;
