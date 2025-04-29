import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-bold mb-6">Lavanya Security</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/salary-slips">Salary Slips</Link>
        <Link to="/invoices">Invoices</Link>
        <Link to="/payments">Payments</Link>
      </nav>
    </div>
  );
};

export default Sidebar;