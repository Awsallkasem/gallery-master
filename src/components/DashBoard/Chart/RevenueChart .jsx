import React from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import "./chart.css";

const RevenueChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Revenue",
        data: [100, 210, 150, 300, 400, 350, 320, 290],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
