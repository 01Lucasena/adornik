import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <div className="menu-bar">
      <nav className="menu-bar-nav">
            <button
            className={`hamburger ${menuOpen ? "hidden" : ""}`}
            onClick={() => setMenuOpen(true)}
            >
            ☰
            </button>

        <ul className={`menu-bar-list ${menuOpen ? "open" : ""}`}>
          <li className="menu-bar-item">
            <NavLink to="/home" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li className="menu-bar-item">
            <NavLink to="/produtos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Produtos</NavLink>
          </li>
          <li className="menu-bar-item">
            <NavLink to="/sobre" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink>
          </li>
          <li className="menu-bar-item">
            <NavLink to="/contato" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
