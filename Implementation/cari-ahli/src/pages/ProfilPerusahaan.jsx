// src/pages/ProfilPerusahaan.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilPerusahaan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9f9fb] p-10 relative">
      {/* Tombol Kembali di Kiri Atas */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-full text-sm"
      >
        ←
      </button>

      {/* Konten Utama */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
        <div className="flex items-center gap-6">
          <div className="text-6xl">🏢</div>
          <div>
            <h1 className="text-2xl font-bold">PT. CariAhli Digital Nusantara</h1>
            <p className="text-sm text-gray-500">
              Perusahaan teknologi yang berfokus pada pengembangan talenta digital mahasiswa. Solusi Cerdas untuk Menemukan Talenta Berkualitas.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div>
            <h2 className="font-semibold">Alamat</h2>
            <p>Jl. Ringroad Selatan, Kragilan, Daerah Istimewa Yogyakarta 55191</p>
          </div>

          <div>
            <h2 className="font-semibold">Kontak</h2>
            <p>Email: info@cariahli.co.id</p>
            <p>Telepon: (0274) 123456</p>
          </div>

          <div>
            <h2 className="font-semibold">Deskripsi Perusahaan</h2>
            <p>
              PT. CariAhli Digital Nusantara merupakan perusahaan teknologi yang menghadirkan solusi inovatif dalam proses rekrutmen. Kami menjembatani perusahaan dengan mahasiswa berbakat melalui sistem pencarian ahli. Misi kami adalah membantu mahasiswa mempersiapkan diri untuk dunia kerja melalui proyek nyata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
