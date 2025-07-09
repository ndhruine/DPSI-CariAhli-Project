import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const DosenDashboard = () => {
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

    </div>
  );
};

export default DosenDashboard;
