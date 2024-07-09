// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Books</Link>
      <Link to="/authors" style={styles.link}>Authors</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#f8f9fa'
  },
  link: {
    textDecoration: 'none',
    color: '#007bff'
  }
};

export default Navbar;
