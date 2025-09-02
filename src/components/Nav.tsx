// src/components/Nav.tsx
import React from "react";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="logo-nav">
        <img src="/logo1.png" alt="Pixell River Financial Logo" className="logo" />
        <ul>
          <li><a href="#">Employees</a></li>
          <li><a href="#">Organization</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
