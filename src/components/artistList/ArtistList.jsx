import React, { Component } from "react";
import "./artist.css";
import SearchBar from "../common/SearchBar/SearchBar";
import {
  getArtistList,
  searchAboutArtist,
} from "../../services/artistListService";
import { imageUrl } from "../../config.json";
import { NavLink } from "react-router-dom";

class ArtistList extends Component {
  state = {
    artists: [],
    searchTerm: "", // Add searchTerm to state
    errors: {},
  };

  async componentDidMount() {
    try {
      const allArtists = await getArtistList();
      this.setState({ artists: [...allArtists] });
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
    this.getFilteredArtists(searchTerm);
  };

  getFilteredArtists = async (searchTerm) => {
    const { artists } = this.state;
    if (!searchTerm) {
      return artists;
    }
    try {
      const result = await searchAboutArtist(searchTerm);
      this.setState({ artists: [...result] });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors, artists: [] });
      }
    }
  };

  render() {
    const filteredartists = this.state.artists;
    const { errors } = this.state;
    return (
      <div className="user-list" style={{ overflowY: "auto" }}>
        <div className="header">
          <h2>artist list</h2>
        </div>
        <SearchBar onSearch={this.handleSearch} />
        {errors.error && (
          <div className="alert alert-danger">{errors.error}</div>
        )}

        <table>
          <thead>
            <tr>
              <th>artist</th>
              <th>artist ID</th>
              <th>expertise</th>
              <th>followers</th>
              <th>gender</th>
              <th>rates</th>
              <th>specialization</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {filteredartists.map((artists, index) => (
              <tr key={index}>
                <td>
                  <div className="user-info">
                    <img
                      src={
                        artists.image
                          ? imageUrl + "/" + artists.image
                          : "avatar.png"
                      }
                      alt={"image.png"}
                      className="user-avatar"
                    />
                    <div>
                      <div className="user-name">
                        {" "}
                        <NavLink to={`/artist/profile/${artists.id}`}>
                          <span>{artists.name}</span>
                        </NavLink>
                      </div>
                      <div className="user-email">{artists.email}</div>
                    </div>
                  </div>
                </td>
                <td>{artists.id}</td>
                <td>
                  {artists.expertise ? artists.expertise : "no expertise"}
                </td>
                <td>{artists.followers_number}</td>
                <td>{artists.gender ? artists.gender : "isn`t set"}</td>
                <td>{artists.rates_number}</td>
                <td>
                  {artists.specialization
                    ? artists.specialization
                    : "isn`t set"}
                </td>
                <td
                  className={`alert ${
                    artists.status == "activeAsArtist"
                      ? "text-success"
                      : artists.status == "activeAsUser"
                      ? "text-warning"
                      : "text-danger"
                  }`}
                >
                  {" "}
                  {artists.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ArtistList;
