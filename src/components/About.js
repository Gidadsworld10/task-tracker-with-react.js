import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";


const About = () => {
  return (
    <div className='container'>
      <div className='space'>
        <h4>Version 1.1.0</h4>
        <Link to="/">Go Back</Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default About;
