import React from 'react';
import { useNavigate } from 'react-router-dom';

const allCandidates = [
  'Chika Nurdini',
  'Fitra Anggoro',
  'Budi Santoso',
  'Siti Aminah',
  'Kristin Moore',
  'Ava Olivia',
  'Harry Noah',
  'Natalia Messy',
  'Bayu Pratama',
  'Intan Sari',
];

export default function SemuaKandidat() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white rounded-xl shadow-md min-h-screen">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        ←
      </button>

      {/* Judul dan Daftar Kandidat */}
      <h2 className="text-2xl font-bold mb-4 text-purple-700">Daftar Semua Kandidat</h2>
      <ul className="list-disc pl-6 text-gray-800">
        {allCandidates.map((nama, index) => (
          <li key={index} className="mb-1">{nama}</li>
        ))}
      </ul>
    </div>
  );
}
