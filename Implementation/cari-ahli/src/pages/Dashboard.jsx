import React from "react";
import { Users, MessageCircle, Briefcase, CalendarCheck } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Mahasiswa",
      value: 120,
      icon: <Users className="w-8 h-8 text-indigo-800" />,
      desc: "Mahasiswa yang terdaftar aktif",
    },
    {
      title: "Feedback Industri",
      value: 45,
      icon: <MessageCircle className="w-8 h-8 text-indigo-800" />,
      desc: "Masukan dari perusahaan rekanan",
    },
    {
      title: "Rekomendasi Karir",
      value: 30,
      icon: <Briefcase className="w-8 h-8 text-indigo-800" />,
      desc: "Rekomendasi karir yang tersedia",
    },
    {
      title: "Konsultasi Terjadwal",
      value: 12,
      icon: <CalendarCheck className="w-8 h-8 text-indigo-800" />,
      desc: "Jadwal konsultasi minggu ini",
    },
  ];

  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-full">{item.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
