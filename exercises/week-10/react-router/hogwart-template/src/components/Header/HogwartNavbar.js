import React from 'react';
import './HogwartNavbar.css';
import { Link } from 'react-router-dom';

const HogwartNavbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-link">Home</div>
        <div className="navbar-link">About</div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
    </nav>
  );
}


export default HogwartNavbar;
