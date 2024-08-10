import React, { Component } from "react";
import "./stats.css";
import { getUserList } from "../../../services/userListService";
import { getArtistList, getArts } from "../../../services/artistListService";

class State extends Component {
  state = { userNumber: 0, artistNumber: 0, numberOfArts: 0 };
  componentDidMount = async () => {
    const numberOfUsers = await getUserList();
    this.setState({ userNumber: numberOfUsers.length });
    const numberOfArtist = await getArtistList();
    this.setState({ artistNumber: numberOfArtist.length });
    const numberOfArts = await getArts();
    this.setState({ numberOfArts: numberOfArts.length });
  };

  render() {
    return (
      <div className="stats">
        <div className="stat-item">
          <h5>Number of Artists</h5>
          <p>{this.state.artistNumber}</p>
          {/* <span className="text-danger"></span> */}
        </div>
        <div className="stat-item">
          <h5>Number of Users</h5>
          <p>{this.state.userNumber}</p>
          {/* <span className="text-success">+8% last month</span> */}
        </div>
        <div className="stat-item">
          <h5>Number of Arts</h5>
          <p>{this.state.numberOfArts}</p>
          {/* <span className="text-danger">-2% last month</span> */}
        </div>
      </div>
    );
  }
}

export default State;
