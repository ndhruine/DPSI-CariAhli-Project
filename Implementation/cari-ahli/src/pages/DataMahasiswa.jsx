import React from "react";

const DataMahasiswa = () => {
  const mahasiswa = [
    {
      id: 1,
      nama: "Rina Amelia",
      nim: "123456789",
      jurusan: "Teknik Informatika",
      universitas: "Universitas Brawijaya",
      email: "rina.amelia@ub.ac.id",
    },
    {
      id: 2,
      nama: "Doni Setiawan",
      nim: "987654321",
      jurusan: "Sistem Informasi",
      universitas: "Universitas Indonesia",
      email: "doni.setiawan@ui.ac.id",
    },
    {
      id: 3,
      nama: "Tari Widya",
      nim: "1122334455",
      jurusan: "Manajemen",
      universitas: "Universitas Gadjah Mada",
      email: "tari.widya@ugm.ac.id",
    },
  ];

  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-semibold mb-6">Data Mahasiswa</h1>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg text-gray-800">
        <table className="min-w-full table-auto">
          <thead className="bg-indigo-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Nama</th>
              <th className="px-4 py-3 text-left">NIM</th>
              <th className="px-4 py-3 text-left">Jurusan</th>
              <th className="px-4 py-3 text-left">Universitas</th>
              <th className="px-4 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.id} className="border-t">
                <td className="px-4 py-3">{mhs.nama}</td>
                <td className="px-4 py-3">{mhs.nim}</td>
                <td className="px-4 py-3">{mhs.jurusan}</td>
                <td className="px-4 py-3">{mhs.universitas}</td>
                <td className="px-4 py-3">{mhs.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataMahasiswa;
