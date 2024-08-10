import React, { Component } from "react";
import "./login.css";
import LoginForm from "./loginForm";
import SideImage from "./../common/SideImage";
class Login extends Component {
  state = {};
  render() {
    return (
      <div className="parent ">
        <LoginForm
          header="Login"
          fField="email"
          SField="password"
          buttonDo="Login"
        />
        <SideImage label="Hey welcome back" />
      </div>
    );
  }
}

export default Login;
