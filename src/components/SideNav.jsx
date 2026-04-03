import React from "react";
import "../styles/SideNav.css";
import { MdDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

const SideNav = ({ activePage, setActivePage, darkMode }) => {

  return (
    <div className={darkMode ? "sidebar dark" : "sidebar light"}>
      <img src="../../admin-logo.png" alt="admin-logo" className="logo mb-3"/>

      <ul className="nav-list">
        <li
          className={`nav-item ${activePage === "dashboard" ? "active" : ""
            }`}
          onClick={() => setActivePage("dashboard")}
        >
          <MdDashboardCustomize />  Overview
        </li>

        <li
          className={`nav-item ${activePage === "transactions" ? "active" : ""
            }`}
          onClick={() => setActivePage("transactions")}
        >
          <GrTransaction /> Transactions
        </li>
      </ul>
    </div>
  );
};

export default SideNav;