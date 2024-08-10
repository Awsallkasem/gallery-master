import React from "react";
import "./ProfilePosts.css";
import { imageUrl } from "../../../config.json";

const ProfilePosts = ({ posts }) => {

  return (
    <div className="profile-posts">
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="post">
            <img
              src={post.url ? imageUrl + "/" + post.url : "image.png"}
              alt="Post"
            />
            <p>{post.title}</p>
          </div>
        ))}
    </div>
  );
};

export default ProfilePosts;
