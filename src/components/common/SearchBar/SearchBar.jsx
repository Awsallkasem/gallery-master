import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    searchTerm: "",
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchTerm: value });
  };

  handleSearchClick = () => {
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
