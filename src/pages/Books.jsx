// src/pages/Books.jsx
import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddOrEditBook = (book) => {
    if (editingBook) {
      setBooks(
        books.map((b) => (b.isbn === editingBook.isbn ? book : b))
      );
    } else {
      setBooks([...books, book]);
    }
    setEditingBook(null);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = (isbn) => {
    setBooks(books.filter((book) => book.isbn !== isbn));
  };

  return (
    <div style={styles.container}>
      <h1>Manage Books</h1>
      <BookForm
        onSubmit={handleAddOrEditBook}
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
      />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
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

export default Books;
