// React
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="bgHeader">
      <nav className="navHeader">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/">Accueil</Link>
        <Link to="/">Profil</Link>
        <Link to="/">Réglage</Link>
        <Link to="/">Communauté</Link>
      </nav>
    </div>
  );
}

export default Header;
