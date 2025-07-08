import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Ikon seperti gambar

const kandidatBaru = [
  {
    id: 11,
    nama: 'Zahra Mutia',
    posisi: 'AI Engineer',
    skill: ['Python', 'TensorFlow', 'Machine Learning'],
  },
  {
    id: 12,
    nama: 'Dimas Arya',
    posisi: 'Cloud Engineer',
    skill: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: 13,
    nama: 'Raisa Febriani',
    posisi: 'Cybersecurity Analyst',
    skill: ['Nmap', 'Wireshark', 'Linux'],
  },
  {
    id: 14,
    nama: 'Yoga Saputra',
    posisi: 'Game Developer',
    skill: ['Unity', 'C#'],
  },
];

export default function KandidatBaru() {
  const navigate = useNavigate();

  const handleLihatDetail = (id) => {
    navigate(`/detail-kandidat?id=${id}`);
  };

  const handlePilihKandidat = (nama) => {
    alert(`Kandidat ${nama} dipilih`);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-black">Rekomendasi Kandidat Baru</h2>
          <p className="text-sm text-gray-600">
            Berikut kandidat terbaru yang belum Anda lihat sebelumnya.
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
        >
          ⬅ Kembali
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kandidatBaru.map((kandidat) => (
          <div
            key={kandidat.id}
            className="rounded-xl p-4 shadow-md hover:shadow-lg transition text-white"
            style={{
              background: 'linear-gradient(to right, #c084fc, #fb923c)',
            }}
          >
            <div className="flex items-start gap-4">
              <FaUserCircle className="text-5xl text-purple-900" />
              <div>
                <h3 className="text-lg font-semibold">{kandidat.nama}</h3>
                <p className="text-sm text-white">{kandidat.posisi}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {kandidat.skill.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleLihatDetail(kandidat.id)}
                    className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-600"
                  >
                    Lihat Detail
                  </button>
                  <button
                    onClick={() => handlePilihKandidat(kandidat.nama)}
                    className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-gray-800"
                  >
                    Pilih Kandidat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
