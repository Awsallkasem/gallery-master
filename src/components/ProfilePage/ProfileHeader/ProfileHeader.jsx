import React from "react";
import "./ProfileHeader.css";
import { imageUrl } from "../../../config.json";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
      {user && (
        <>
          {" "}
          <div className="profile-image">
            <img
              src={user.image ? imageUrl + "/" + user.image : "image.png"}
              alt="Profile"
            />
          </div>
          <div className="profile-info">
            <h2>{user.name}</h2>
            <h1>{user.specialization}</h1>
            <p>{user.email}</p>
            <p>{user.bio}</p>
            <p>followers : {user.followers_number}</p>
            <p>rates : {user.rates_number}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileHeader;
