import React from "react";

const SummaryCard = ({ title, count, color }) => {
  return (
    <div className={`bg-white shadow-md rounded-xl p-6 w-full`}>
      <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
      <div className={`text-3xl font-bold ${color}`}>{count}</div>
    </div>
  );
};

export default SummaryCard;
