import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import kandidatList from '../data/kandidatList';

export default function DetailKandidat() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));

  const kandidat = kandidatList.find((k) => k.id === id);

  if (!kandidat) {
    return <p className="p-6 text-red-600">Kandidat tidak ditemukan</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-[#f8f6f9]">
      {/* Tombol Kembali */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center gap-2"
        >
          ⬅ Kembali
        </button>
      </div>

      <h2 className="text-2xl font-bold text-purple-800 mb-6">Detail Kandidat</h2>
      <div className="bg-white rounded-xl border shadow-md max-w-xl mx-auto p-6">
        <div className="flex gap-4 items-center mb-4">
          <div className="text-5xl">👤</div>
          <div>
            <h3 className="text-xl font-bold">{kandidat.nama}</h3>
            <p>{kandidat.posisi}</p>
            <p className="text-sm text-gray-500">{kandidat.jurusan}</p>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <div>
            <h4 className="font-semibold">Profil</h4>
            <p>{kandidat.deskripsiProfil}</p>
          </div>

          <div>
            <h4 className="font-semibold">Keahlian</h4>
            <ul className="list-disc pl-5">
              {kandidat.keahlian.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Deskripsi Proyek</h4>
            <p className="font-medium">{kandidat.proyek.nama}</p>
            <p className="text-xs text-gray-500">{kandidat.proyek.teknologi}</p>
            <p>{kandidat.proyek.deskripsi}</p>
          </div>

          <div>
            <h4 className="font-semibold">Kontak</h4>
            <p>No. HP : {kandidat.kontak.hp}</p>
            <p>Email &nbsp;: {kandidat.kontak.email}</p>
          </div>

          <button
            onClick={() => alert('Kandidat berhasil dipilih')}
            className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800"
          >
            Pilih Kandidat
          </button>
        </div>
      </div>
    </div>
  );
}
