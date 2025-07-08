import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailRiwayat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil nama kandidat dari query params, dibersihkan dengan trim dan lowercase
  const params = new URLSearchParams(location.search);
  const namaParam = params.get("id")?.trim().toLowerCase(); // <-- Perbaikan di sini

  // Data dummy, semua key ditulis lowercase
  const dataRiwayat = {
    "chika nurdini": { tanggal: "22/04/2024", waktu: "09:00", via: "Zoom" },
    "natalia messy": { tanggal: "21/04/2024", waktu: "11:00", via: "WhatsApp" },
    "kristin moore": { tanggal: "20/04/2024", waktu: "15:00", via: "Offline Interview" },
    "yuni safira": { tanggal: "19/04/2024", waktu: "08:30", via: "Zoom" },
    "rafi nugroho": { tanggal: "18/04/2024", waktu: "10:15", via: "WhatsApp" },
    "nadya putri": { tanggal: "17/04/2024", waktu: "14:00", via: "Offline Interview" },
  };

  const detail = dataRiwayat[namaParam];

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Data tidak ditemukan</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Detail Riwayat Wawancara</h2>
        <p className="text-lg"><strong>Nama:</strong> {params.get("id")}</p>
        <p className="text-lg"><strong>Tanggal:</strong> {detail.tanggal}</p>
        <p className="text-lg"><strong>Waktu:</strong> {detail.waktu}</p>
        <p className="text-lg"><strong>Via:</strong> {detail.via}</p>
        <p className="mt-4 text-green-600 font-semibold">Status: Sudah selesai wawancara</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailRiwayat;
