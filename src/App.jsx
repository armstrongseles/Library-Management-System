import React, { useState } from 'react';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddBook = (book) => {
    if (editingBook) {
      setBooks(books.map(b => b.isbn === book.isbn ? book : b));
      setEditingBook(null);
    } else {
      setBooks([...books, book]);
    }
  };

  const handleAddAuthor = (author) => {
    if (editingAuthor) {
      setAuthors(authors.map(a => a.name === author.name ? author : a));
      setEditingAuthor(null);
    } else {
      setAuthors([...authors, author]);
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleEditAuthor = (author) => {
    setEditingAuthor(author);
  };

  const handleDeleteBook = (isbn) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  const handleDeleteAuthor = (name) => {
    setAuthors(authors.filter(author => author.name !== name));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Library Management System</h1>
      </header>
      <main className="main">
        <section className="form-section">
          <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
          <BookForm
            initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
            onSubmit={handleAddBook}
          />
          <h2>{editingAuthor ? 'Edit Author' : 'Add Author'}</h2>
          <AuthorForm
            initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
            onSubmit={handleAddAuthor}
          />
        </section>
        <section className="list-section">
          <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />
          <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
        </section>
      </main>
    </div>
  );
};

export default App;
