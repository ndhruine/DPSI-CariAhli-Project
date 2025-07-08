import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wawancara = () => {
  const [tabAktif, setTabAktif] = useState("jadwal");
  const navigate = useNavigate();

  const jadwalWawancara = [
    { nama: "Ava Olivia", tanggal: "24/04/2024", waktu: "10:00", via: "Zoom" },
    { nama: "Fitra Anggoro", tanggal: "25/04/2024", waktu: "14:00", via: "WhatsApp" },
    { nama: "Harry Noah", tanggal: "26/04/2024", waktu: "13:30", via: "Offline Interview" },
    { nama: "Yuni Safira", tanggal: "27/04/2024", waktu: "09:00", via: "Zoom" },
    { nama: "Rafi Nugroho", tanggal: "28/04/2024", waktu: "11:00", via: "WhatsApp" },
    { nama: "Nadya Putri", tanggal: "29/04/2024", waktu: "15:30", via: "Offline Interview" },
  ];

  const riwayatWawancara = [
    { nama: "Chika Nurdini", tanggal: "22/04/2024", waktu: "09:00", via: "Zoom" },
    { nama: "Natalia Messy", tanggal: "21/04/2024", waktu: "11:00", via: "WhatsApp" },
    { nama: "Kristin Moore", tanggal: "20/04/2024", waktu: "15:00", via: "Offline Interview" },
  ];

  const handleKlikKandidat = (nama) => {
    if (tabAktif === "jadwal") {
      navigate(`/detail-wawancara?id=${encodeURIComponent(nama)}`);
    } else {
      navigate(`/riwayat-wawancara?id=${encodeURIComponent(nama)}`);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-2xl font-semibold text-black">Perusahaan</h1>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Siap Bertemu Kandidat Unggulan?</h2>
        <p className="text-gray-700 italic">Periksa Jadwal Wawancara Anda!!!</p>
      </div>

      <div className="flex gap-6 mt-6">
        <button
          onClick={() => setTabAktif("jadwal")}
          className={`shadow-md rounded-lg px-6 py-4 text-center w-60 ${
            tabAktif === "jadwal" ? "bg-white font-semibold" : "bg-gray-100"
          }`}
        >
          <h3 className="text-lg">Jadwal Wawancara</h3>
          <p className="text-2xl text-purple-600">{jadwalWawancara.length}</p>
        </button>
        <button
          onClick={() => setTabAktif("riwayat")}
          className={`shadow-md rounded-lg px-6 py-4 text-center w-60 ${
            tabAktif === "riwayat" ? "bg-white font-semibold" : "bg-gray-100"
          }`}
        >
          <h3 className="text-lg">Riwayat Wawancara</h3>
          <p className="text-2xl text-purple-600">{riwayatWawancara.length}</p>
        </button>
      </div>

      <div className="mt-10 space-y-4 max-w-3xl">
        {(tabAktif === "jadwal" ? jadwalWawancara : riwayatWawancara).map((item, index) => (
          <div
            key={index}
            onClick={() => handleKlikKandidat(item.nama)}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4 cursor-pointer hover:bg-purple-50"
          >
            <FaUserCircle className="text-3xl text-purple-600" />
            <div>
              <p className="font-medium text-lg">{item.nama}</p>
              <p className="text-sm text-gray-600">
                {tabAktif === "jadwal"
                  ? `${item.tanggal} - ${item.waktu} (${item.via})`
                  : `Selesai: ${item.tanggal} - ${item.waktu} (${item.via})`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wawancara;
