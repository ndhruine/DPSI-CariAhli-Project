import React from 'react';

function CandidateCard({ name, role, skills }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <div className="flex items-center gap-4">
        <div className="text-3xl">👤</div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}<br />{skills}</p>
          <button className="mt-2 bg-purple-200 hover:bg-purple-300 text-sm font-medium px-4 py-1 rounded-full">
            Lihat Portofolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default CandidateCard;
