// src/Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaArtstation,
  FaNewspaper,
  FaSignOutAlt,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  const toggleHome = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="image.png" alt="Art World" />

        <h2>Art World</h2>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <div className="menu-item" onClick={toggleHome}>
              <FaHome className="icon" />
              <span>Home</span>
              <span className="dropdown-arrow">{isHomeOpen ? "▲" : "▼"}</span>
            </div>
            {isHomeOpen && (
              <ul className="dropdown">
                <li>
                  <NavLink to="/" exact activeClassName="active">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/userlist" activeClassName="active">
              <FaUserAlt className="icon" />
              <span>user list</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/artistList" activeClassName="active">
              <FaUserAlt className="icon" />
              <span>artist list</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/ReliabilityCertificates" activeClassName="active">
              <FaArtstation className="icon" />
              <span>Certificates</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/complaint" activeClassName="active">
              <FaNewspaper className="icon" />
              <span>complaint</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/messages" activeClassName="active">
              <FaEnvelope className="icon" />
              <span>Message</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active">
              <FaSignOutAlt className="icon" />
              <span>LogOut</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
