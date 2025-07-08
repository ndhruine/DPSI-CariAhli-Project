import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const TabelRekruter = () => {
  const [rekruter, setRekruter] = useState([]);

  useEffect(() => {
    const fetchRekruter = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = [];

        querySnapshot.forEach((doc) => {
          if (doc.data().role === "rekruter") {
            data.push({ id: doc.id, ...doc.data() });
          }
        });

        setRekruter(data);
      } catch (error) {
        console.error("Gagal fetch data rekruter:", error);
      }
    };

    fetchRekruter();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-purple-700 font-bold text-lg mb-2">Tabel Daftar Rekruter</h2>

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
            {rekruter.map((r, index) => (
              <tr key={r.id} className="border-t">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{r.nama || "-"}</td>
                <td className="p-2">{r.hp || "-"}</td>
                <td className="p-2">{r.email}</td>
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

export default TabelRekruter;
