import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const TabelDosen = () => {
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    const fetchDosen = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().role === "dosen") {
            data.push({ id: doc.id, ...doc.data() });
          }
        });

        setDosen(data);
      } catch (error) {
        console.error("Gagal fetch data dosen:", error);
      }
    };

    fetchDosen();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-purple-700 font-bold text-lg mb-2">Tabel Daftar Dosen</h2>

      <div className="overflow-x-auto rounded-lg border border-blue-300">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2">No.</th>
              <th className="p-2">Nama</th>
              <th className="p-2">No. Hp</th>
              <th className="p-2">Email</th>
              <th className="p-2">Status</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dosen.map((d, index) => (
              <tr key={d.id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{d.nama || "-"}</td>
                <td className="p-2">{d.hp || "-"}</td>
                <td className="p-2">{d.email}</td>
                <td className="p-2">Aktif</td>
                <td className="p-2 text-blue-500 cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelDosen;
