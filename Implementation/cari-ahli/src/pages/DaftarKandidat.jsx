import React from 'react';
import { useNavigate } from 'react-router-dom';

const kandidatList = [
  {
    id: 1,
    nama: 'Kristin Moore',
    posisi: 'Data Analyst',
    skill: ['HTML', 'React'],
  },
  {
    id: 2,
    nama: 'Ava Olivia',
    posisi: 'Web Developer',
    skill: ['JavaScript', 'React'],
  },
  {
    id: 3,
    nama: 'Harry Noah',
    posisi: 'Web Development',
    skill: ['Python', 'JavaScript'],
  },
  {
    id: 4,
    nama: 'Natalia messy',
    posisi: 'Software Engineer',
    skill: ['Python', 'Java', 'C++'],
  },
  {
    id: 5,
    nama: "Chika Nurdini",
    posisi: "Front End Developer",
    skill: ["React", "Tailwind"],
  },
  {
    id: 6,
    nama: "Fitra Anggoro",
    posisi: "Data Analyst",
    skill: ["Excel", "Python"],
  },
  {
    id: 7,
    nama: "Budi Santoso",
    posisi: "Back End Developer",
    skill: ["Node.js", "Express"],
  },
  {
    id: 8, 
    nama: "Siti Aminah",
    posisi: "UI/UX Designer",
    skill: ["Figma", "Design Thinking"],
  },
  {
    id: 9,
    nama: "Bayu Pratama",
    posisi: "Mobile Developer",
    skill: ["Flutter", "Dart"],
  },
  {
    id: 10,
    nama: "Intan Sari",
    posisi: "Cybersecurity Specialist",
    skill: ["Networking", "Linux", "Penetration Testing"],
  }
];

export default function DaftarKandidat() {
  const navigate = useNavigate();

  const handleLihatDetail = (id) => {
    navigate(`/detail-kandidat?id=${id}`);
  };

  const handlePilihKandidat = (nama) => {
    alert(`Kandidat ${nama} dipilih`);
  };

  const handleRekomendasiLain = () => {
    navigate('/kandidat-baru');
  };

  return (
    <div className="min-h-screen bg-[#f8f6f9] p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-black">Rekomendasi Kandidat Terbaik Untuk Anda</h2>
          <p className="text-sm text-gray-600">
            Temukan talenta unggulan sesuai kebutuhan proyek anda dari portofolio nyata mahasiswa berbakat
          </p>
        </div>
        <button
          onClick={handleRekomendasiLain}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
        >
          Minta Rekomendasi Lain
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kandidatList.map((kandidat, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-300 via-purple-400 to-orange-300 rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              {/* Ikon profil berbentuk bulat dengan latar gradasi */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold bg-gradient-to-br from-purple-700 to-purple-500 text-purple-100 shadow">
                👤
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{kandidat.nama}</h3>
                <p className="text-sm text-white">{kandidat.posisi}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {(kandidat.skill || []).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => handleLihatDetail(kandidat.id)}
                className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 text-sm"
              >
                Lihat Detail
              </button>
              <button
                onClick={() => handlePilihKandidat(kandidat.nama)}
                className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 text-sm"
              >
                Pilih Kandidat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
