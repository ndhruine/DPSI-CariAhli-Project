import React from 'react';

function StatBox({ title, value, icon }) {
  return (
    <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 text-center rounded-xl shadow-md p-6">
      <p className="text-lg font-semibold mb-2">{title}</p>
      {value ? (
        <p className="text-4xl font-bold">{value}</p>
      ) : (
        <div className="text-4xl">{icon}</div>
      )}
    </div>
  );
}

export default StatBox;
