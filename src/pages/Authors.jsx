// src/pages/Authors.jsx
import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddOrEditAuthor = (author) => {
    if (editingAuthor) {
      setAuthors(
        authors.map((a) => (a.name === editingAuthor.name ? author : a))
      );
    } else {
      setAuthors([...authors, author]);
    }
    setEditingAuthor(null);
  };

  const handleEdit = (author) => {
    setEditingAuthor(author);
  };

  const handleDelete = (name) => {
    setAuthors(authors.filter((author) => author.name !== name));
  };

  return (
    <div style={styles.container}>
      <h1>Manage Authors</h1>
      <AuthorForm
        onSubmit={handleAddOrEditAuthor}
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
      />
      <AuthorList authors={authors} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  }
};

export default Authors;
