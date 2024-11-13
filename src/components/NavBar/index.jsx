
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'; // Asegúrate de importar tu archivo de estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
          <NavLink to="/" className="button home-button">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mis-proyectos" className="home-button">Mis Proyectos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/repos" className="home-button">Mis Repositorios</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
