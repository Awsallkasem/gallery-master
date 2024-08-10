import React, { useState } from "react";
import "./editProfile.css";
import { updateprofile } from "../../../services/profileService";
import { toast } from "react-toastify";

const EditProfile = ({ user, onSave }) => {
  const [file, setFile] = useState(null); // state to hold the uploaded file

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    gender: user.gender,
    image: user.Image || "", // default to existing profile image or empty
  });
  const [errors, setErrors] = useState(false);
  const handleChange = ({ currentTarget: input }) => {
    const data = { ...formData };
    data[input.name] = input.value;
    setFormData(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file); // set the file state
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: URL.createObjectURL(file), // create a preview URL
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    try {
      const respone = await updateprofile(formData, user, file);
      onSave();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-profile">
      <div className="container">
        <h2 className="text-center mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Profile Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={handleImageChange}
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Profile"
                className="profile-img-preview mt-3"
              />
            )}
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password" // Corrected name attribute
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
