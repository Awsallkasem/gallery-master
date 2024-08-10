import React, { Component } from "react";
class About extends Component {
  state = { user: this.props.user };
  render() {
    const { user } = this.state;
    return (
      <div className="profile-info">
        <h2>name : {user.name}</h2>
        <h2>email : {user.email}</h2>

        <p>specialization : {user.specialization}</p>
        <p>expertise : {user.expertise}</p>
        <p>biography : {user.biography}</p>
        <p>followers : {user.followers_number}</p>
        <p>rates : {user.rates_number}</p>
      </div>
    );
  }
}

export default About;
