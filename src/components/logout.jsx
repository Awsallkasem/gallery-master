import React from "react";
import { logout } from "./../services/authService";
const LogOut = () => {
  logout();
  window.location.href="/login"
};

export default LogOut;
