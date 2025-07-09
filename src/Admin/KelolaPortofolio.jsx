import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const KelolaPortofolio = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [portofolios, setPortofolios] = useState([]); // ✅ perhatikan: portofolios pakai "s"
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortofolio = async () => {
      try {
        const snapshot = await getDocs(collection(db, "portofolio"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setPortofolios(data);
      } catch (error) {
        console.error("Gagal mengambil data portofolio:", error);
      }
    };

    fetchPortofolio();
  }, []);

  const filtered = portofolios
    .filter((m) => {
      const nama = m.nama?.toLowerCase() || "";
      const nim = m.nim || "";
      const skill = Array.isArray(m.skill) ? m.skill.join(" ").toLowerCase() : "";
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
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Filter dan Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari nama / NIM / skill"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-gray-300 rounded-full shadow-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="terbaru">Terbaru</option>
          <option value="terlama">Terlama</option>
        </select>
      </div>

      {/* Header dan Tambah Button */}
      <div className="flex justify-between mb-4 items-center">
        <h2 className="font-bold text-purple-700 text-xl">Kelola Portofolio Mahasiswa</h2>
        <button
          onClick={() => navigate("/admin/tambah-portofolio")}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full font-semibold"
        >
          Tambah Portofolio
        </button>
      </div>

      {/* Grid Portofolio */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md border border-purple-300 p-6 flex flex-col justify-between"
            >
              <h3 className="font-bold text-lg text-purple-800">{item.nama}</h3>
              <p className="text-sm text-gray-600">{item.nim}</p>

              <div className="flex gap-2 flex-wrap mt-2">
                {Array.isArray(item.skill) && item.skill.length > 0 ? (
                  item.skill.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-xs text-gray-400 italic">Tidak ada skill</p>
                )}
              </div>

              <button
                className="mt-4 bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-sm"
                onClick={() => navigate(`/admin/detailportofolio/${item.id}`)}
              >
                Lihat Detail Portofolio
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Tidak ada data portofolio ditemukan.</p>
      )}
    </div>
  );
};

export default KelolaPortofolio;
