import React from 'react';
import { Link } from 'react-router-dom';
import Home from "./Component/Home";
import About from "./Component/About";
import Work from "./Component/Work";
import './Main.css';
import Login from './Pages/Login/Login';


function Main() {
  return (
    <div>
      <nav>
        <div className="nav-logo-container">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="navbar-links-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">How It Works</Link>
          <Link to="/login" className="login-button">Login</Link>
        </div>
        <div className="navbar-menu-container">
          <svg /* Menu icon SVG here */></svg>
        </div>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="login">
        <Login />
      </section>
      <div className="white-space"></div>
      
    </div>
   
  );
}

export default Main;
