import React from "react";
import "./widget.css";

const Sales = () => {
  return (
    <div className="widget">
      <h4>Sales</h4>
      <p>$23,210.00</p>
      <small>May 2022</small>
      <span className="text-danger">-2% last month</span>
    </div>
  );
};

export default Sales;
