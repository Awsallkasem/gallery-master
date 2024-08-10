import React, { Component } from "react";
import "./newUsers.css";
import { getUserList } from "../../../services/userListService";

class NewUsers extends Component {
  state = { users: [] };
  componentDidMount = async () => {
    let users = await getUserList();
    if(Array.isArray(users)){
      users=users.slice(-5);
    this.setState({ users: [...users] })}
  };

  render() {
    return (
      <div className="widget">
        <h4>New Users</h4>
        <ul className="new-users-list">
          {this.state.users.map((user, index) => (
            <li key={index}>
              <span>{user.name}</span>
              <small>{user.city}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NewUsers;
