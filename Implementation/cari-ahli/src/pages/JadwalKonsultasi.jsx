import React from "react";

const JadwalKonsultasi = () => {
  const jadwal = [
    {
      mahasiswa: "Dewi Lestari",
      pembimbing: "Bu Rina",
      topik: "Pemilihan Karier di Bidang IT",
      tanggal: "10 Juli 2025",
      waktu: "10:00 - 11:00",
      status: "Terkonfirmasi",
    },
    {
      mahasiswa: "Agus Pratama",
      pembimbing: "Pak Andi",
      topik: "Persiapan Interview",
      tanggal: "11 Juli 2025",
      waktu: "13:00 - 14:00",
      status: "Menunggu Konfirmasi",
    },
    {
      mahasiswa: "Maya Putri",
      pembimbing: "Bu Sari",
      topik: "Melanjutkan Studi S2",
      tanggal: "12 Juli 2025",
      waktu: "09:00 - 10:00",
      status: "Dibatalkan",
    },
  ];

  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Jadwal Konsultasi</h1>
      <p className="mb-4 text-sm md:text-base">
        Berikut adalah daftar jadwal konsultasi antara mahasiswa dan pembimbing karier. 
        Konsultasi ini bertujuan membantu mahasiswa mengambil keputusan terbaik untuk masa depan mereka.
      </p>

      <div className="overflow-auto bg-white rounded-xl shadow-md text-black">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-sm md:text-base">
            <tr>
              <th className="p-3 border">Nama Mahasiswa</th>
              <th className="p-3 border">Pembimbing</th>
              <th className="p-3 border">Topik Konsultasi</th>
              <th className="p-3 border">Tanggal</th>
              <th className="p-3 border">Waktu</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((data, index) => (
              <tr key={index} className="hover:bg-purple-100 transition-all">
                <td className="p-3 border">{data.mahasiswa}</td>
                <td className="p-3 border">{data.pembimbing}</td>
                <td className="p-3 border">{data.topik}</td>
                <td className="p-3 border">{data.tanggal}</td>
                <td className="p-3 border">{data.waktu}</td>
                <td className="p-3 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      data.status === "Terkonfirmasi"
                        ? "bg-green-200 text-green-800"
                        : data.status === "Dibatalkan"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="p-3 border text-center">
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-xs">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JadwalKonsultasi;
