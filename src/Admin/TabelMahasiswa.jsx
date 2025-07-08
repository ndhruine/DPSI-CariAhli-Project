import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; // sesuaikan path Firebase.js kamu

const TabelMahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  // Ambil data dari Firestore saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchMahasiswa = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().role === "mahasiswa") {
            data.push({ id: doc.id, ...doc.data() });
          }
        });

        setMahasiswa(data);
      } catch (error) {
        console.error("Gagal fetch data:", error);
      }
    };

    fetchMahasiswa();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-purple-700 font-bold text-lg mb-2">Tabel Daftar Mahasiswa</h2>

      <div className="overflow-x-auto rounded-lg border border-blue-300">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2">No.</th>
              <th className="p-2">NIM</th>
              <th className="p-2">Nama</th>
              <th className="p-2">No. Hp</th>
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs, index) => (
              <tr key={mhs.id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{mhs.email.substring(0, 10)}</td> {/* NIM belum ada di form register */}
                <td className="p-2">{mhs.nama}</td>
                <td className="p-2">{mhs.hp}</td>
                <td className="p-2">{mhs.email}</td>
                <td className="p-2">Aktif</td>
                <td className="p-2 text-blue-500 cursor-pointer">edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelMahasiswa;
