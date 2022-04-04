import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Fodashboard from "../hooks/Fodashboard";

const Dashboard = () => {
  const [charts, setCharts] = Fodashboard();
  console.log(charts);
  return (
    <div>
      <div className="first-chart">
        <BarChart width={900} height={800} data={charts}>
          <Bar dataKey="sell" fill="#8884d8" />
          <XAxis dataKey="month"></XAxis>
          <YAxis dataKey="sell"></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>
      <div className="second-chart">
        <LineChart
          width={700}
          height={500}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="third-chart">
        <LineChart
          width={800}
          height={600}
          data={charts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="four-chart">
        <AreaChart
          width={800}
          height={600}
          data={charts}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Dashboard;
