import React, { Component } from "react";

import "./Profile.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import { getArtistProfile, getArtistWork } from "../../services/profileService";
import About from "./AboutSection/about";

class ProfilePage extends Component {
  state = {
    user: {},
    posts: "",
    errors: {},
    artistId: this.props.match.params.id,
    active: "posts",
  };
  componentDidMount = async () => {
    const { artistId } = this.state;
    const profile = await getArtistProfile(artistId);
    try {
      const posts = await getArtistWork(artistId);
      this.setState({ posts: posts });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors });
      }
    }
    this.setState({ user: profile });
  };
  getPosts = async () => {
    this.setState({ active: "posts" });

    try {
      const { artistId } = this.state;
      const posts = await getArtistWork(artistId);
      this.setState({ posts: posts });
    } catch (ex) {
      if (ex.response || ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.error = ex.response.data.data;
        this.setState({ errors });
      }
    }
  };
  getAbout = async() => {
    this.setState({ active: "about" });
  };
  getarticals=()=>{
    this.setState({ active: "articals" });

  }
  render() {
    const { user, errors, posts, active } = this.state;
    return (
      <div className="profile-page">
        <ProfileHeader user={user} />
        <div className="profile-nav">
          <p
            onClick={this.getPosts}
            className={`${active === "posts" ? "active" : ""}`}
          >
            Posts
          </p>

          {/* <p
            onClick={this.getarticals}
            className={`${active === "articals" ? "active" : ""}`}
          >
            Articals
          </p> */}

          <p
            onClick={this.getAbout}
            className={`${active === "about" ? "active" : ""}`}
          >
            About
          </p>
        </div>
        {posts && active == "posts" && <ProfilePosts posts={posts} />}
        {user && active == "about" && <About user={user} />}
        {errors.error && active == "posts" && (
          <div className="alert alert-danger">{errors.error}</div>
        )}
      </div>
    );
  }
}

export default ProfilePage;
