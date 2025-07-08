import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DashboardAdmin = () => {
  const [totalPortofolio, setTotalPortofolio] = useState(0);
  const [totalMahasiswa, setTotalMahasiswa] = useState(0);
  const [totalDosen, setTotalDosen] = useState(0);
  const [totalRekruter, setTotalRekruter] = useState(0);
  const [portofolioTerbaru, setPortofolioTerbaru] = useState([]);
  const [grafikAktivitas, setGrafikAktivitas] = useState([]);
  const [statusPortofolio, setStatusPortofolio] = useState({
    dilihat: 0,
    masuk: 0,
    ditolak: 0,
  });

  const COLORS = ['#6C5DD3', '#00C49F', '#FF8042'];

  useEffect(() => {
    const fetchData = async () => {
      const portoSnap = await getDocs(collection(db, 'portofolio'));
      const userSnap = await getDocs(collection(db, 'users'));

      setTotalPortofolio(portoSnap.size);
      setTotalMahasiswa(userSnap.docs.filter(d => d.data().role === 'mahasiswa').length);
      setTotalDosen(userSnap.docs.filter(d => d.data().role === 'dosen').length);
      setTotalRekruter(userSnap.docs.filter(d => d.data().role === 'rekruter').length);

      const terbaruQuery = query(collection(db, 'portofolio'), orderBy('createdAt', 'desc'), limit(3));
      const terbaruSnap = await getDocs(terbaruQuery);
      const terbaru = terbaruSnap.docs.map(doc => {
        const d = doc.data();
        return {
          nama: d.nama,
          prodi: d.prodi ?? 'Sistem Informasi',
          createdAt: d.createdAt?.toDate()?.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }) ?? '-',
        };
      });
      setPortofolioTerbaru(terbaru);

      setGrafikAktivitas([
        { hari: 'Sun', dilihat: 4, masuk: 2 },
        { hari: 'Mon', dilihat: 6, masuk: 3 },
        { hari: 'Tue', dilihat: 10, masuk: 5 },
        { hari: 'Wed', dilihat: 8, masuk: 4 },
        { hari: 'Thu', dilihat: 5, masuk: 4 },
        { hari: 'Fri', dilihat: 6, masuk: 3 },
      ]);

      setStatusPortofolio({
        dilihat: 60,
        masuk: 30,
        ditolak: 10,
      });
    };

    fetchData();
  }, []);

  const pieData = [
    { name: 'Dilihat', value: statusPortofolio.dilihat },
    { name: 'Masuk', value: statusPortofolio.masuk },
    { name: 'Ditolak', value: statusPortofolio.ditolak },
  ];

  return (
    <div className="p-6 bg-[#f7f9fc] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Baris Atas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Ringkasan Data */}
        <div className="md:col-span-2 bg-gradient-to-r from-[#e2d9f5] to-[#fef3eb] p-6 rounded-xl shadow">
          <h3 className="font-semibold text-[#6C5DD3] mb-4">Ringkasan Data</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-sm">Total Portofolio</p>
              <h2 className="text-2xl font-bold">{totalPortofolio}</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-sm">Total Mahasiswa</p>
              <h2 className="text-2xl font-bold">{totalMahasiswa}</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-sm">Total Dosen</p>
              <h2 className="text-2xl font-bold">{totalDosen}</h2>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-sm">Total Rekruter</p>
              <h2 className="text-2xl font-bold">{totalRekruter}</h2>
            </div>
          </div>
        </div>

        {/* Portofolio Terbaru */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-[#6C5DD3] mb-4">Portofolio Terbaru</h3>
          {portofolioTerbaru.length === 0 ? (
            <p className="text-sm text-gray-400">Belum ada portofolio</p>
          ) : (
            <ul className="space-y-3">
              {portofolioTerbaru.map((p, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <div className="bg-[#e2d9f5] p-2 rounded-full text-[#6C5DD3]">👤</div>
                  <div>
                    <div className="font-medium">{p.nama}</div>
                    <div className="text-sm text-gray-500">{p.prodi}</div>
                    <div className="text-xs text-gray-400">{p.createdAt}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Baris Bawah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aktivitas Mingguan */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4 text-[#6C5DD3]">Aktivitas Mingguan</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={grafikAktivitas}>
              <XAxis dataKey="hari" />
              <Tooltip />
              <Bar dataKey="dilihat" fill="#6C5DD3" />
              <Bar dataKey="masuk" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Status Portofolio */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4 text-[#6C5DD3]">Status Portofolio</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
