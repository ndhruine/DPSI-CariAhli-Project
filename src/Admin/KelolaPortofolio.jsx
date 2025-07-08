import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const KelolaPortofolio = () => {
  const [portofolios, setPortofolios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPortofolio = async () => {
      const snapshot = await getDocs(collection(db, "portofolio"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPortofolios(data);
    };

    fetchPortofolio();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4 items-center">
        <h2 className="font-bold text-purple-700 text-xl">Kelola Portofolio Mahasiswa</h2>
        <button
          onClick={() => navigate("/admin/tambah-portofolio")}
          className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold"
        >
          Tambah Portofolio
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {portofolios.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-lg">{item.nama}</h3>
            <p className="text-sm text-gray-600">{item.nim}</p>
            <div className="flex gap-2 mt-2">
              {item.skill?.map((skill, i) => (
                <span key={i} className="bg-purple-700 text-white px-2 py-1 rounded-full text-xs">{skill}</span>
              ))}
            </div>
            <button
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm"
              onClick={() => navigate(`/admin/detailportofolio/${item.id}`)}
            >
              Lihat detail Portofolio
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KelolaPortofolio;
