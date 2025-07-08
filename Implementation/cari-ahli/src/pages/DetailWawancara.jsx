import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Data lengkap wawancara
const dataWawancara = {
  "Ava Olivia": {
    posisi: "Web Developer",
    tanggal: "24/04/2024",
    waktu: "10:00",
    via: "Zoom",
  },
  "Fitra Anggoro": {
    posisi: "Data Analyst",
    tanggal: "25/04/2024",
    waktu: "14:00",
    via: "WhatsApp",
  },
  "Harry Noah": {
    posisi: "Full Stack",
    tanggal: "26/04/2024",
    waktu: "13:30",
    via: "Offline Interview",
  },
  "Yuni Safira": {
    posisi: "Mobile Developer",
    tanggal: "27/04/2024",
    waktu: "09:00",
    via: "Zoom",
  },
  "Rafi Nugroho": {
    posisi: "Data Engineer",
    tanggal: "28/04/2024",
    waktu: "11:00",
    via: "WhatsApp",
  },
  "Nadya Putri": {
    posisi: "System Analyst",
    tanggal: "29/04/2024",
    waktu: "15:30",
    via: "Offline Interview",
  },
};

export default function DetailWawancara() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const nama = params.get("id");

  const detail = dataWawancara[nama];
  const [popup, setPopup] = useState(false);

  if (!detail) {
    return (
      <div className="p-6 text-red-500">
        <p>Kandidat tidak ditemukan</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-200 rounded-full"
        >
          Kembali
        </button>
      </div>
    );
  }

  const handleKirim = () => {
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);
  };

  const handleKembali = () => {
    navigate("/wawancara");
  };

  return (
    <div className="p-6 min-h-screen bg-pink-50">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Detail Wawancara</h2>
        <p><strong>Nama:</strong> {nama}</p>
        <p><strong>Posisi:</strong> {detail.posisi}</p>
        <p><strong>Tanggal:</strong> {detail.tanggal}</p>
        <p><strong>Waktu:</strong> {detail.waktu}</p>
        <p><strong>Via:</strong> {detail.via}</p>

        <div className="mt-6 flex gap-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
            onClick={handleKirim}
          >
            Kirim Undangan
          </button>
          <button
            className="bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300"
            onClick={handleKembali}
          >
            Kembali
          </button>
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow text-green-600 font-semibold">
            ✅ Undangan berhasil dikirim!
          </div>
        </div>
      )}
    </div>
  );
}
