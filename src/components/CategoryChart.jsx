import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const CategoryChart = ({ data, darkMode }) => {
  return (
    <div
      style={{
        background: darkMode ? "#1e293b" : "#fff",
        padding: "10px",
        borderRadius: "10px",
        height: "300px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            outerRadius={100}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;