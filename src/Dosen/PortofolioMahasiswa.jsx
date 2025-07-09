import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function PortofolioMahasiswa() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [portofolio, setPortofolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortofolio = async () => {
      const snapshot = await getDocs(collection(db, "portofolio"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPortofolios(data);
    };

    fetchPortofolio();
  }, []);

  const filtered = portofolio
    .filter((m) => {
      const nama = m.nama?.toLowerCase() || "";
      const nim = m.nim || "";
      const skill = m.skill?.join(" ").toLowerCase() || "";
      return (
        nama.includes(search.toLowerCase()) ||
        nim.includes(search) ||
        skill.includes(search.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sort === "terbaru") {
        return b.tahun - a.tahun;
      } else if (sort === "terlama") {
        return a.tahun - b.tahun;
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-xl font-bold text-purple-700 mb-4">Portofolio Mahasiswa</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari nama / NIM / skill"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="terbaru">Terbaru</option>
          <option value="terlama">Terlama</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-purple-300 p-6 flex flex-col justify-between"
          >
            <h3 className="font-bold text-lg">{item.nama}</h3>
            <p className="text-sm text-gray-600">{item.nim}</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {item.skill?.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              onClick={() => navigate(`/dosen/ddetailportofolio/${item.id}`)}
              className="mt-4 bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm"
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
