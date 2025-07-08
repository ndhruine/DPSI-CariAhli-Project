import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyCandidates = [
  { id: 1, name: 'Chika Nurdini', role: 'Web Development', skills: ['JavaScript', 'React'], description: 'Web developer with experience...' },
  { id: 2, name: 'Fitra Anggoro', role: 'Data Analysis', skills: ['React', 'HTML'], description: 'Data analyst who specializes...' },
  { id: 3, name: 'Budi Santoso', role: 'Backend Developer', skills: ['Node.js', 'Express'], description: 'Backend developer...' },
  { id: 4, name: 'Siti Aminah', role: 'UI/UX Designer', skills: ['Figma', 'Adobe XD'], description: 'UI/UX expert...' },
  { id: 5, name: 'kristin Moore', role: 'Mobile Developer', skills: ['Flutter', 'Dart'], description: 'Mobile apps...' },
  { id: 6, name: 'Ava Olivia', role: 'Project Manager', skills: ['Agile', 'Scrum'], description: 'PM specialist...' },
  { id: 7, name: 'Harry Noah', role: 'DevOps Engineer', skills: ['Docker', 'CI/CD'], description: 'Handles deployment...' },
  { id: 8, name: 'Natalia Messy', role: 'QA Tester', skills: ['Selenium', 'Jest'], description: 'Quality assurance...' },
  { id: 9, name: 'Bayu Pratama', role: 'Software Engineer', skills: ['C++', 'Python'], description: 'System programmer...' },
  { id: 10, name: 'Intan Sari', role: 'Data Scientist', skills: ['Pandas', 'NumPy'], description: 'Analyzes data...' },
];

function Dashboard() {
  const [selectedCandidate, setSelectedCandidate] = useState(dummyCandidates[0]);
  const navigate = useNavigate();

  const handleViewPortfolio = (id) => {
    navigate(`/kandidat?id=${id}`);
  };

  const handleHubungiKandidat = () => {
    alert('Berhasil menghubungi kandidat');
  };

  return (
    <div className="p-6 bg-[#f9f9fb] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-purple-800">Selamat Datang di Cari Ahli</h1>

        {/* Tombol Profil Perusahaan dengan desain bulat ungu */}
        <button
          onClick={() => navigate('/profil-perusahaan')}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-700 to-purple-500 text-white shadow"
          title="Profil Perusahaan"
        >
          <span className="text-xl">👤</span>
        </button>
      </div>

      {/* Kandidat dan Detail */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* List Kandidat */}
        <div className="col-span-2 grid grid-cols-2 gap-6">
          {dummyCandidates.slice(0, 4).map((candidate) => (
            <div
              key={candidate.id}
              onClick={() => setSelectedCandidate(candidate)}
              className={`cursor-pointer bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition ${
                selectedCandidate?.id === candidate.id ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex flex-col">
                <div className="text-4xl mb-2">👤</div>
                <h2 className="font-semibold text-lg">{candidate.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{candidate.role}</p>
                <div className="flex gap-2 flex-wrap">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border rounded-full text-xs text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewPortfolio(candidate.id);
                  }}
                  className="mt-3 bg-gray-300 hover:bg-gray-400 text-sm font-medium px-4 py-1 rounded-full w-fit"
                >
                  Lihat Portofolio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Kandidat */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
          <div className="text-5xl mb-2">👤</div>
          <h2 className="font-bold">{selectedCandidate.name}</h2>
          <p className="text-sm text-gray-500 mb-2">{selectedCandidate.role}</p>
          <div className="flex gap-2 text-xs mb-4">
            {selectedCandidate.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 border rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">{selectedCandidate.description}</p>
          <div className="flex flex-col w-full gap-2">
            <button
              onClick={() => handleViewPortfolio(selectedCandidate.id)}
              className="bg-gray-700 text-white py-2 rounded-full text-sm"
            >
              Lihat Portofolio
            </button>
            <button
              onClick={handleHubungiKandidat}
              className="bg-gray-700 text-white py-2 rounded-full text-sm"
            >
              Hubungi Kandidat
            </button>
          </div>
        </div>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-2 gap-6">
        <div
          onClick={() => navigate('/semua-kandidat')}
          className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 text-center rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg"
        >
          <p className="text-lg font-semibold mb-2">Total Kandidat</p>
          <p className="text-4xl font-bold">{dummyCandidates.length}</p>
        </div>

        <div
          onClick={() => navigate('/wawancara')}
          className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 text-center rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg"
        >
          <p className="text-lg font-semibold mb-2">Jadwal Wawancara</p>
          <div className="text-4xl">📅</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
