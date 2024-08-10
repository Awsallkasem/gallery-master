import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./../common/form";
import authService from "../../services/authService";
import { toast } from 'react-toastify';

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);

       window.location.href =  "/";

    } catch (ex) {
      if (ex.response || ex.response.status === 400) {

        const errors = { ...this.state.errors };

        errors.email = ex.response.data.data;
        this.setState({ errors });
      
      }
    }
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="Login">
        <img src="./image.png" />
        <p className="artWorld"> Art World</p>
        <p> Login</p>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          {this.renderInput("email", "email")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>

      </div>
    );
  }
}

export default LoginForm;
