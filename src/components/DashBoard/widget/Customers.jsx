import React from "react";
import "./widget.css";

const Customers = () => {
  return (
    <div className="widget">
      <h4>Customers</h4>
      <p>3,200</p>
      <small>May 2022</small>
      <span className="text-danger">-2% last month</span>
    </div>
  );
};

export default Customers;
