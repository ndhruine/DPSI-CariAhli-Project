import React from "react";

const HubungkanIndustri = () => {
  const mahasiswaData = [
    {
      nama: "Alya Nurrahma",
      universitas: "Universitas Gadjah Mada",
      jurusan: "Teknik Informatika",
      email: "alya.nurrahma@example.com",
      perusahaan: "Google Indonesia",
      posisi: "Software Engineer",
      status: "Menunggu Respon",
    },
    {
      nama: "Budi Santoso",
      universitas: "Institut Teknologi Bandung",
      jurusan: "Teknik Elektro",
      email: "budi.santoso@example.com",
      perusahaan: "PLN",
      posisi: "Engineer Lapangan",
      status: "Sudah Dihubungi",
    },
    {
      nama: "Citra Ayu",
      universitas: "Universitas Indonesia",
      jurusan: "Psikologi",
      email: "citra.ayu@example.com",
      perusahaan: "Unilever",
      posisi: "HRD Intern",
      status: "Diterima",
    },
  ];

  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Hubungkan ke Industri</h1>
      <p className="mb-4 text-sm md:text-base">
        Halaman ini menampilkan mahasiswa yang tertarik bekerja di perusahaan
        tertentu. Perusahaan dapat melihat profil singkat mahasiswa dan
        menghubungi mereka secara langsung melalui email yang tersedia.
      </p>

      <div className="overflow-auto bg-white rounded-xl shadow-md text-black">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-sm md:text-base">
            <tr>
              <th className="p-3 border">Nama Mahasiswa</th>
              <th className="p-3 border">Universitas</th>
              <th className="p-3 border">Jurusan</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Perusahaan Tujuan</th>
              <th className="p-3 border">Posisi Diminati</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswaData.map((data, index) => (
              <tr key={index} className="hover:bg-purple-100 transition-all">
                <td className="p-3 border">{data.nama}</td>
                <td className="p-3 border">{data.universitas}</td>
                <td className="p-3 border">{data.jurusan}</td>
                <td className="p-3 border">{data.email}</td>
                <td className="p-3 border">{data.perusahaan}</td>
                <td className="p-3 border">{data.posisi}</td>
                <td className="p-3 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      data.status === "Diterima"
                        ? "bg-green-200 text-green-800"
                        : data.status === "Sudah Dihubungi"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="p-3 border text-center">
                  <a
                    href={`mailto:${data.email}`}
                    className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-xs"
                  >
                    Hubungi
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HubungkanIndustri;
