import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Gidado 2022</p>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
