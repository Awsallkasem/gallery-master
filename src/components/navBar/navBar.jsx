import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
import { imageUrl } from "../../config.json";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-nav  navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav  ">
        <NavLink className="nav-item nav-link  profile " to="/">
          <h2>Dash board</h2>
        </NavLink>
        {user && (
          <div className="position-absolute top-0 end-0">
            <NavLink
              className="nav-item nav-link position-absolute top-0 end-0"
              to="/profile"
            >
              <div className="profile">
                <Link className="navbar-brand " to="/profile">
                  <h2>{user.name}</h2>
                </Link>

                <img src={imageUrl + "/" + user.image} alt="Art World" />
              </div>
            </NavLink>
          </div>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
