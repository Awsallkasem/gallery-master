import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { imageUrl } from "../../config.json";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="container">
        <h2 className="text-center mb-4">Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card">
              <div className="profile-picture">
                <img src={imageUrl + "/" + user.image} alt={"profile"} />
              </div>
              <h5 className="mt-3">{user.name}</h5>
              <p>{user.email}</p>
              <Link to="/edit-profile" className="btn btn-primary">
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile-info">
              <h5>Personal Information</h5>
              <hr />
              <div className="info-item">
                <strong>Name:</strong> {user.name}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {user.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
