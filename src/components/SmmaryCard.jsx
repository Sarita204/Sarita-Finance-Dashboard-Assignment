import React from "react";

const SummaryCard = ({ title, amount, darkMode }) => {
  return (
    <div style={{
      background: darkMode ? "#1e293b" : "#fff",
      padding: "20px",
      borderRadius: "10px",
      width: "200px",
      border:"1px solid lightgray"
    }}>
      <h4> <b>{title}</b></h4>
      <h5 >₹ {amount}</h5>
    </div>
  );
};

export default SummaryCard;