import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailKonsultasi = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-[#4B0082] text-white p-6">
        <p>Data tidak ditemukan.</p>
        <button
          onClick={() => navigate('/jadwal-konsultasi')}
          className="mt-4 bg-indigo-600 px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Detail Konsultasi</h1>
      <div className="bg-white text-black p-6 rounded shadow-md space-y-2">
        <p><strong>Nama:</strong> {data.nama}</p>
        <p><strong>NIM:</strong> {data.nim}</p>
        <p><strong>Asal Universitas:</strong> {data.universitas}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>No HP:</strong> {data.hp}</p>
        <p><strong>Pembimbing:</strong> {data.pembimbing}</p>
        <p><strong>Topik:</strong> {data.topik}</p>
        <p><strong>Tanggal Konsultasi:</strong> {data.tanggal}</p>
        <p><strong>Waktu:</strong> {data.waktu}</p>
        <p><strong>Platform:</strong> {data.platform}</p>
        <p><strong>Status:</strong> {data.status}</p>
        <p><strong>Catatan Mahasiswa:</strong> {data.catatan}</p>
        <p><strong>Catatan Pembimbing:</strong> {data.catatanPembimbing}</p>
      </div>

      <button
        onClick={() => navigate('/jadwal-konsultasi')}
        className="mt-6 bg-indigo-600 px-4 py-2 rounded"
      >
        Kembali
      </button>
    </div>
  );
};

export default DetailKonsultasi;
