import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import { getAuth } from 'firebase/auth';
import portofolio from './Portofolio.png';
import proyek from './SystemInformation.png';
import unduh from './Downloading Updates.png';
import lanjut from './Forward.png';
import dosen from './youngman.png';
import rekrutmen from './female engineer.png';
import { useNavigate } from 'react-router-dom';

const MahasiswaDashboard = () => {
  const navigate = useNavigate();
  const [statusPortofolio, setStatusPortofolio] = useState('Memuat...');
  const [jumlahProyek, setJumlahProyek] = useState(0);
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const fetchPortofolioMahasiswa = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const nim = user.email.substring(0, 10); // Asumsinya NIM = 10 karakter awal email

      try {
        const q = query(collection(db, 'portofolio'), where('nim', '==', nim));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          setStatusPortofolio('AKTIF');
          const data = snapshot.docs[0].data();

          const proyek = Array.isArray(data.proyek) ? data.proyek : [];
          setJumlahProyek(proyek.length);

          const skillList = Array.isArray(data.skill) ? data.skill : [];
          setSkill(skillList);
        } else {
          setStatusPortofolio('BELUM ADA');
          setJumlahProyek(0);
          setSkill([]);
        }
      } catch (error) {
        console.error("Gagal mengambil data portofolio:", error);
        setStatusPortofolio('Gagal');
        setSkill([]);
      }
    };

    fetchPortofolioMahasiswa();
  }, []);

  return (
    <div className="p-6 bg-[#F4F6FA] min-h-screen">
      <h2 className="text-md font-semibold text-purple-900 mb-6">Selamat Datang di Cari Ahli</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative bg-gradient-to-t from-purple-200 to-purple-500 rounded-xl p-6 shadow-md">
          <img src={portofolio} alt="Portofolio" className="absolute h-full w-1/3 top-0 left-0 opacity-70" />
          <div className="text-white text-lg text-right font-semibold">Status Portofolio</div>
          <div className="text-right text-3xl font-bold text-purple-900">{statusPortofolio}</div>
        </div>

        <div className="relative bg-gradient-to-t from-purple-200 to-purple-500 rounded-xl p-6 shadow-md">
          <img src={proyek} alt="Proyek" className="absolute h-full w-1/3 top-0 left-0 opacity-70" />
          <div className="text-white text-lg text-right font-semibold">Jumlah Projek</div>
          <div className="text-right text-3xl font-bold text-purple-900">{jumlahProyek}</div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between gap-4">
        <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-32 py-3 rounded-full shadow-md relative">
          Unduh Portofolio
          <img src={unduh} alt="Unduh" className="absolute w-8 h-8 right-16" />
        </button>

        <button
          onClick={() => navigate('/mahasiswa/portofolio')}
          className="flex items-center justify-center gap-2 border-2 border-purple-500 text-purple-700 font-semibold px-32 py-3 rounded-full shadow-md hover:bg-purple-50"
        >
          Lihat Portofolio
          <img src={lanjut} alt="lanjut" className="w-8 h-8" />
        </button>
      </div>

      {/* Skill Saya */}
      <div className="bg-white rounded-xl p-6 shadow-md flex flex-col mt-6 border">
        <div className="text-purple-900 text-lg font-poppins font-normal">Skill saya</div>
        <div className="flex flex-wrap gap-4 p-3">
          {skill.length > 0 ? (
            skill.map((item, idx) => (
              <div
                key={idx}
                className="text-purple-900 font-poppins font-light border-2 border-purple-500 rounded-full px-10 py-1 flex items-center"
              >
                {item}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Belum ada skill yang dimasukkan</p>
          )}
        </div>
      </div>

      <div className="text-purple-900 text-lg font-poppins font-normal mt-8">Dilihat oleh</div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-2">
        <div className="bg-white border-2 border-purple-900 rounded-xl p-6 shadow-md flex flex-col justify-between relative">
          <img src={dosen} alt="dosen" className="absolute h-40 w-1/6 -top-3 left-0" />
          <div className="text-purple-900 text-lg font-semibold text-right">Dosen</div>
          <div className="text-right text-3xl font-bold text-purple-900 mr-4">2</div>
        </div>

        <div className="bg-white border-2 border-purple-900 rounded-xl p-6 shadow-md flex flex-col justify-between relative">
          <img src={rekrutmen} alt="rekrutmen" className="absolute h-40 w-1/6 right-0 -top-5" />
          <div className="text-purple-900 text-lg font-semibold">Rekruter</div>
          <div className="text-purple-900 text-3xl font-bold ml-7">2</div>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaDashboard;
