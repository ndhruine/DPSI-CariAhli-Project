import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase';
import { useReactToPrint } from 'react-to-print';

const Portofolio = () => {
  const [data, setData] = useState(null);
  const [kontak, setKontak] = useState({ email: '', noHp: '' });
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const nim = user.email.substring(0, 10);

      try {
        // Ambil data portofolio berdasarkan nim
        const q = query(collection(db, 'portofolio'), where('nim', '==', nim));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const portofolioData = snapshot.docs[0].data();
          setData(portofolioData);

          // Ambil email dan no.hp dari koleksi users
          const userSnapshot = await getDocs(collection(db, 'users'));
          const userData = userSnapshot.docs
            .map((doc) => doc.data())
            .find((u) => u.email?.startsWith(nim));

          if (userData) {
            setKontak({
              email: userData.email || '',
              noHp: userData.hp || '',
            });
          }
        }
      } catch (error) {
        console.error('Gagal mengambil portofolio:', error);
      }
    };

    fetchData();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Portofolio Mahasiswa',
  });

  if (!data) return <p className="p-4 text-center">Memuat portofolio...</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold text-purple-900">Portofolio Saya</h2>
        <button
          onClick={handlePrint}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
        >
          Unduh PDF
        </button>
      </div>

      <div ref={componentRef} className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md border border-purple-300 text-center">
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

export default Portofolio;
