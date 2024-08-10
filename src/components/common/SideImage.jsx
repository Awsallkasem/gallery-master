import React from "react";
const SideImage = ({ label }) => {
  return (
    <div className=" container welcome-back-container">
      <div className="circle large-circle"></div>
      <div className="circle medium-circle"></div>
      <div className="circle small-circle"></div>
      <div className="text">{label}</div>
    </div>
  );
};

export default SideImage;
