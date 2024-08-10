import React, { Component } from "react";
import "./UserList.css";
import SearchBar from "../common/SearchBar/SearchBar";
import { getUserList, searchAboutUser } from "../../services/userListService";
import { imageUrl } from "../../config.json";

class UserList extends Component {
  state = {
    users: [],
    searchTerm: "", // Add searchTerm to state
    errors: {},
  };

  async componentDidMount() {
    try {
      const allUsers = await getUserList();
      this.setState({ users: [...allUsers] });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };

        errors.error = ex.response.data.data;
        this.setState({ errors });
      }
    }
  }

  // Method to handle search input changes
  handleSearch = (searchTerm) => {
    this.getFilteredUsers(searchTerm);
  };

  // Method to get filtered users based on search term
  getFilteredUsers = async (searchTerm) => {
    const { users } = this.state;
    if (!searchTerm) {
      return users;
    }
    try {
      const result = await searchAboutUser(searchTerm);
      this.setState({ users: [...result] });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors ,users:[]});
        
      }
    }

  
  };

  render() {
    const filteredUsers = this.state.users;
    const { errors } = this.state;
    return (
      <div className="user-list">
        <div className="header">
          <h2>user list</h2>
        </div>
        <SearchBar onSearch={this.handleSearch} />
        {errors.error && (
          <div className="alert alert-danger">{errors.error}</div>
        )}

        <table>
          <thead>
            <tr>
              <th>USER</th>
              <th>USER ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="user-info">
                    <img
                         src={
                            user.image
                              ? imageUrl + "/" + user.image
                              : "avatar.png"
                          }   alt={"image.png"}
                      className="user-avatar"
                    />
                    <div>
                      <div className="user-name">{user.name}</div>
                      <div className="user-email">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.id}</td>
                <td>{user.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
