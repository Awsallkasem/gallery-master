import React, { Component } from "react";

import { imageUrl } from "../../../config.json";
import "./card.css";
import {
  acceptcertificate,
  getcertificateDetails,
  rejectcertificate,
} from "../../../services/certificate";
class CertificateDetails extends Component {
  state = {
    certificate: {},
    id: this.props.match.params.id,
    errors: {},
    success: "",
    displayedImage: "",
  };
  componentDidMount = async () => {
    const { id } = this.state;
    const certificate = await getcertificateDetails(id);
    this.setState({ certificate: certificate });
  };

  handelAccept = async () => {
    try {
      const { id, certificate } = this.state;
      const accept = await acceptcertificate(id);
      if (accept) {
        const accepted = { ...certificate };
        accepted.status = "accepted";
        this.setState({
          certificate: accepted,
          errors: {},
          success: "this certificate accepted successfuly",
        });
      }
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };

        errors.error = ex.response.data.data;
        this.setState({ errors, success: "" });
      }
    }
  };
  handelReject = async () => {
    try {
      const { id, certificate } = this.state;
      const reject = await rejectcertificate(id);
      if (reject) {
        const rejected = { ...certificate };
        rejected.status = "rejected";
        this.setState({
          certificate: rejected,
          errors: {},
          success: "this certificate accepted successfuly",
        });
      }
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors, success: "" });
      }
    }
  };

  handelDisplayedImage = (image) => {
    this.setState({ displayedImage: image });
  };
  render() {
    const { certificate, errors, success, displayedImage } = this.state;

    return (
      <div className="certificateDetails d-flex justify-content-center align-items-center ">
        <div
          className="card mb-3"
          style={{ width: "800px", minHeight: "280px" }}
        >
          <div className="row g-0 " style={{ height: "550px" }}>
            <div className="col-md-4 " >
              <img
                className="container  clickable"
                onClick={() => {
                  this.handelDisplayedImage(certificate.image);
                }}
                src={
                  certificate.image && certificate.image
                    ? imageUrl + "/" + certificate.image
                    : "image.png"
                }
              />
              <img
                className="container clickable col-md-6"
                onClick={() => {
                  this.handelDisplayedImage(certificate.image);
                }}
                src={
                  certificate.image && certificate.image
                    ? imageUrl + "/" + certificate.image
                    : "image.png"
                }
              />
              <img
                className="container clickable col-md-6"
                onClick={() => {
                  this.handelDisplayedImage(certificate.image);
                }}
                src={
                  certificate.image && certificate.image
                    ? imageUrl + "/" + certificate.image
                    : "image.png"
                }
              />
            </div>
            <div className="col-md-8">
              <div className="card-body ">
                <h5 className="card-title border-bottom pb-1 ">
                  by user : {certificate.artist && certificate.artist.name}{" "}
                </h5>
                <p className={certificate.status + " border-bottom pb-1"}>
                  {certificate.status}{" "}
                </p>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ maxHeight: "320px" }}
                >
                  <img
                    className="mg-fluid container"
                    src={displayedImage && imageUrl + "/" + displayedImage}
                    style={{ maxWidth: "320px", maxHeight: "320px" }}
                  />
                </div>
              </div>
            </div>

            <div
              class="card-footer d-flex justify-content-between align-items-center"
              style={{ height: "50px" }}
            >
              <small class="text-body-secondary">
                {certificate.formatted_creation_date}
              </small>
              <div>
                <button
                  className="btn btn-success me-2 btn-sm"
                  onClick={this.handelAccept}
                >
                  accept
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.handelReject}
                >
                  reject
                </button>
              </div>
            </div>
            {errors.error && (
              <div className="alert alert-danger  ">{errors.error}</div>
            )}
            {success && <div className="alert alert-success ">{success}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default CertificateDetails;
