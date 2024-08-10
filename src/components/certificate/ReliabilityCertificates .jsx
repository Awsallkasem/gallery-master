import React, { Component } from "react";
import { imageUrl } from "../../config.json";
import "./certificate.css";
import { getAllcertificate } from "../../services/certificate";
import { NavLink } from "react-router-dom";

class ReliabilityCertificates extends Component {
  state = {
    certificates: [],
  };

  componentDidMount = async () => {
    try {
      const certificates = await getAllcertificate();
      this.setState({ certificates: certificates });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };

        errors.error = ex.response.data.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { certificates } = this.state;
    return (
      <div className="certificate" style={{ overflowY: "auto" }}>
        <div className="header">
          <h2>Reliability Certificates</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Artist Name</th>
              <th>Status</th>
              <th>Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {certificates &&
              certificates.map((certificate) => (
                <tr key={certificate.id}>
                  <td>
                    <NavLink
                      to={`/certificate/show/${certificate.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img
                        className="imgage"
                        src={
                          certificate.artist.image
                            ? imageUrl + "/" + certificate.artist.image
                            : "avatar.png"
                        }
                        alt="certificate"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </NavLink>
                  </td>
                  <td>
                    <NavLink
                      to={`/certificate/show/${certificate.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      {certificate.artist.name}
                    </NavLink>
                  </td>

                  <td className={certificate.status}>{certificate.status}</td>
                  <td>{certificate.formatted_creation_date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReliabilityCertificates;
