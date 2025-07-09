import React from "react";
import { Briefcase, Code, Palette, Database, Globe } from "lucide-react";

const careerRecommendations = [
  {
    id: 1,
    bidang: "Software Engineer",
    deskripsi:
      "Mengembangkan dan memelihara aplikasi berbasis web atau mobile. Cocok untuk mahasiswa jurusan Informatika.",
    icon: <Code className="w-8 h-8 text-white" />,
  },
  {
    id: 2,
    bidang: "UI/UX Designer",
    deskripsi:
      "Membuat desain antarmuka dan pengalaman pengguna yang intuitif dan menarik. Cocok untuk mahasiswa yang kreatif.",
    icon: <Palette className="w-8 h-8 text-white" />,
  },
  {
    id: 3,
    bidang: "Data Analyst",
    deskripsi:
      "Menganalisis data untuk membantu perusahaan membuat keputusan. Cocok untuk mahasiswa dengan minat analitik.",
    icon: <Database className="w-8 h-8 text-white" />,
  },
  {
    id: 4,
    bidang: "Digital Marketer",
    deskripsi:
      "Merancang strategi pemasaran digital dan mengelola kampanye online. Cocok untuk mahasiswa komunikasi atau bisnis.",
    icon: <Globe className="w-8 h-8 text-white" />,
  },
  {
    id: 5,
    bidang: "Manajer Proyek",
    deskripsi:
      "Mengatur jadwal, tim, dan anggaran untuk menyelesaikan proyek tepat waktu. Cocok untuk mahasiswa teknik industri atau manajemen.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
  },
];

const RekomendasiKarir = () => {
  return (
    <div className="min-h-screen bg-[#4B0082] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Rekomendasi Karir</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerRecommendations.map((item) => (
          <div
            key={item.id}
            className="bg-white text-[#4B0082] rounded-xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#4B0082] p-3 rounded-full">{item.icon}</div>
              <h2 className="text-xl font-semibold">{item.bidang}</h2>
            </div>
            <p className="text-sm leading-relaxed">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RekomendasiKarir;
