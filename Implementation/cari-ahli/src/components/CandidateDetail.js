import React from 'react';

function CandidateDetail() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="text-5xl mb-2">👤</div>
      <h2 className="font-bold text-lg">Chika Nurdini</h2>
      <p className="text-sm text-gray-500 mb-2">Web Development</p>
      <div className="flex justify-center gap-2 text-xs mb-4">
        <span className="px-3 py-1 border rounded-full">JavaScript</span>
        <span className="px-3 py-1 border rounded-full">React</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Web developer with experience in building responsive websites and modern web applications. Skilled in UI development and has a portfolio of real projects in frontend development.
      </p>
      <div className="flex flex-col gap-2">
        <button className="bg-gray-700 text-white py-2 rounded-full text-sm">Lihat Portofolio</button>
        <button className="bg-gray-700 text-white py-2 rounded-full text-sm">Hubungi Kandidat</button>
      </div>
    </div>
  );
}

export default CandidateDetail;
