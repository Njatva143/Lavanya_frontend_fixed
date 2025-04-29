import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Lavanya Security Services</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow text-center">
          <p>Total Employees</p>
          <h2 className="text-2xl font-bold text-blue-600">150</h2>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p>Active Invoices</p>
          <h2 className="text-2xl font-bold text-green-600">₹2.5L</h2>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p>Payments Processed</p>
          <h2 className="text-2xl font-bold text-purple-600">₹1.8L</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;