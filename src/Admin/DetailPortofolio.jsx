import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

const DetailPortofolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [kontak, setKontak] = useState({ email: '', noHp: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'portofolio', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const portofolioData = docSnap.data();
          setData(portofolioData);

          const nim = portofolioData.nim;

          // Ambil user berdasarkan nim dari email
          const userSnapshot = await getDocs(collection(db, 'users'));
          const userData = userSnapshot.docs
            .map((doc) => doc.data())
            .find((user) => user.email?.substring(0, 10) === nim);

          if (userData) {
            setKontak({
              email: userData.email || '',
              noHp: userData.hp || '',
            });
          }
        } else {
          alert('Portofolio tidak ditemukan');
          navigate(-1);
        }
      } catch (error) {
        console.error('Gagal fetch data:', error);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!data) return <p className="p-4 text-center">Memuat data...</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      {/* Tombol kembali */}
      <button className="text-purple-700 mb-6 font-medium" onClick={() => navigate(-1)}>
        ← Kembali
      </button>

      {/* Kontainer Utama */}
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md border border-purple-300 text-center">
        
        {/* Avatar */}
        <div className="w-24 h-24 mx-auto mb-4 border border-purple-300 rounded-full p-1">
          <img
            src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Informasi Mahasiswa */}
        <div className="mb-4 border border-purple-300 rounded-md p-4">
          <h2 className="text-xl font-bold text-purple-900">{data.nama}</h2>
          <p className="text-gray-700">{data.nim}</p>
          <p className="text-gray-600 mb-2">Semester {data.semester}</p>
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {kontak.email || '-'} &nbsp; | &nbsp;
            <strong>No. Hp:</strong> {kontak.noHp || '-'}
          </p>
        </div>

        {/* Deskripsi */}
        <div className="text-left border border-purple-300 rounded-md p-4 mb-4">
          <h3 className="font-semibold text-purple-800 mb-2">Deskripsi Mahasiswa</h3>
          <p className="text-gray-800 text-sm leading-relaxed">{data.deskripsi}</p>
        </div>

        {/* Skill */}
        <div className="border border-purple-300 rounded-md p-4 mb-4">
          <h3 className="font-semibold text-left mb-2 text-purple-800">Skill</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {data.skill?.map((skill, idx) => (
              <span
                key={idx}
                className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Proyek */}
        <div className="text-left border border-purple-300 rounded-md p-4">
          <h3 className="font-semibold text-purple-800 mb-2">Proyek dan Tugas Mahasiswa</h3>
          {data.proyek?.map((p, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="font-bold">{p.judul} <span className="text-gray-500">({p.tahun})</span></h4>
              <p className="text-sm"><strong>Kategori:</strong> {p.kategori}</p>
              <p className="text-sm">{p.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPortofolio;
