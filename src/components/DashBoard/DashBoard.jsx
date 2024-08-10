import React from "react";
import "./DashBoard.css";
import RevenueChart from './Chart/RevenueChart ';
import Sales from './widget/Sales';
import Customers from './widget/Customers';
import AvgRevenue from './widget/AvgRevenue';
import Stats from './Stats/State';
import TopCustomers from './TopCustomers/TopCustomers';
import NewUsers from './NewUsers/NewUsers';
import Wallet from './Wallet/Wallet';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Sales />
        </div>
        <div className="col-md-4">
          <Customers />
        </div>
        <div className="col-md-4">
          <AvgRevenue />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <RevenueChart />
        </div>
        <div className="col-md-4">
          <Stats />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <TopCustomers />
        </div>
        <div className="col-md-4">
          <NewUsers />
          <Wallet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
