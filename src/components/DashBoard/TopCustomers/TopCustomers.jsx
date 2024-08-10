import React from "react";
import "./topCustomers.css";

const TopCustomers = () => {
  const customers = [
    { name: "John", product: "painting details", orders: 8000, price: "$100", percent: "13%", refunds: 15 },
    { name: "Ruoqi", product: "painting details", orders: 6000, price: "$80", percent: "10%", refunds: 18 },
    { name: "Pam", product: "painting details", orders: 4000, price: "$60", percent: "5.5%", refunds: 11 },
  ];

  return (
    <div className="widget">
      <h4>Top Customers</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Orders</th>
            <th>Price</th>
            <th>Percent</th>
            <th>Refunds</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.orders}</td>
              <td>{customer.price}</td>
              <td>{customer.percent}</td>
              <td>{customer.refunds}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 1-3 of 3 products</span>
      </div>
    </div>
  );
};

export default TopCustomers;
