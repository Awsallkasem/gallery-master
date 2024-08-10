import React, { Component } from "react";

import { getAllComplaint } from "../../services/complaint";

import "./complaint.css";
import { NavLink } from "react-router-dom";
class Complaint extends Component {
  state = { complaints: [], errors: {} };
  componentDidMount = async () => {
    try {
      const complaint = await getAllComplaint();
      this.setState({ complaints: complaint });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors });
      }
    }
  };
  renderContent = (complaint) => {
    const maxTextLength = 50;
    if (complaint.content.length <= maxTextLength) {
      return complaint.content;
    }

    return `${complaint.content.substring(0, maxTextLength)}...`;
  };

  render() {
    const { complaints, errors } = this.state;
    return (
      <div className="complaint-list" style={{overflowY:"auto"}} >
        <div className="header">
          <h2>Complaints</h2>
        </div>
        {errors.error && (
          <div className="alert alert-danger">{errors.error}</div>
        )}
        <table>
          <thead>
            <tr>
              <th>content</th>
              <th>reporter</th>
              <th>reported on</th>
              <th>Date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {complaints &&
              complaints.map((complaint, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="user-info">
                        <div>
                          <NavLink
                            to={`/complaint/show/${complaint.id}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <span>{this.renderContent(complaint)}</span>
                          </NavLink>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="user-email">
                        {complaint.reporter && complaint.reporter.name}
                      </div>
                    </td>
                    <td>
                      {complaint.reported_type.includes("Painting")
                        ? "Painting"
                        : "Articale"}
                    </td>
                    <td>{complaint.formatted_creation_date}</td>
                    <td className={complaint.status}>{complaint.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Complaint;
