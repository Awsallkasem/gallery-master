import React, { Component } from "react";
import {
  acceptComplaint,
  getComplaintDetails,
  rejectComplaint,
} from "../../../services/complaint";
import { imageUrl } from "../../../config.json";
import "./card.css";
class ComplaintDetails extends Component {
  state = {
    complaint: {},
    id: this.props.match.params.id,
    errors: {},
    success: "",
  };
  componentDidMount = async () => {
    const { id } = this.state;
    const complaint = await getComplaintDetails(id);
    this.setState({ complaint: complaint });
  };

  handelAccept = async () => {
    try {
      const { id, complaint } = this.state;
      const accept = await acceptComplaint(id);
      if (accept) {
        const accepted = { ...complaint };
        accepted.status = "accepted";
        this.setState({
          complaint: accepted,
          errors: {},
          success: "this complaint accepted successfuly",
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
      const { id, complaint } = this.state;
      const reject = await rejectComplaint(id);
      if (reject) {
        const rejected = { ...complaint };
        rejected.status = "rejected";
        this.setState({
          complaint: rejected,
          errors: {},
          success: "this complaint accepted successfuly",
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
  render() {
    const { complaint, errors, success } = this.state;

    return (
      <div className="complaint d-flex justify-content-center align-items-center ">
        <div
          className="card mb-3"
          style={{ width: "800px" , minHeight: "280px" }}
        >
          <div className="row g-0 " style={{ height: "480px" }}>
            <div className="col-md-4">
              <img
                className="container"
                src={
                  complaint.reported && complaint.reported.url
                    ? imageUrl + "/" + complaint.reported.url
                    : "image.png"
                }
                style={{ maxWidth: "200px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-1 ">
                  by user : {complaint.reporter && complaint.reporter.name}{" "}
                </h5>
                <p
                  className="card-text border-bottom pb-1"
                  style={{ height: "100px", overflowY: "auto" }}
                >
                  {complaint.content}
                </p>
                <p className="card-text border-bottom pb-1">
                  {" "}
                  reported on :
                  {complaint.reported_type &&
                  complaint.reported_type.includes("Painting")
                    ? " Painting"
                    : " Articale"}
                </p>
                <p className={complaint.status + " border-bottom pb-1"}>
                  {complaint.status}{" "}
                </p>
              </div>
            </div>
            <div
              class="card-footer d-flex justify-content-between align-items-center"
              style={{ height: "50px" }}
            >
              <small class="text-body-secondary">
                {complaint.formatted_creation_date}
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

export default ComplaintDetails;
