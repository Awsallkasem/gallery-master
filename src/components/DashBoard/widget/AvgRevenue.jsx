import React from "react";
import "./widget.css";

const AvgRevenue = () => {
  return (
    <div className="widget">
      <h4>Avg Revenue</h4>
      <p>$220.00</p>
      <small>May 2022</small>
      <span className="text-danger">-13% last month</span>
    </div>
  );
};

export default AvgRevenue;
