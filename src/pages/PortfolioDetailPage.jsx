// src/pages/PortfolioDetailPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { students } from '../data/MockData.js';

export default function PortfolioDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find(s => s.id === id);

  if (!student) {
    return (
      <MainLayout pageTitle="Error">
        <h1 className="text-2xl font-bold text-red-500">Mahasiswa tidak ditemukan!</h1>
        <Link to="/portofolio" className="text-purple-600 hover:underline">
            Kembali ke daftar portofolio
        </Link>
      </MainLayout>
    );
  }

  const handleRequestUpdate = () => {
    alert(`Permintaan pembaruan portofolio untuk ${student.name} telah dikirim.`);
    navigate('/portofolio');
  };

  return (
    <MainLayout pageTitle="">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
            Detail Portofolio Mahasiswa
           <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <span>🔔</span>
                <span>Portofolio belum diperbarui</span>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-6">
            <img src={student.avatar} alt={student.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-200"/>
            <h2 className="text-3xl font-bold text-gray-800">{student.name}</h2>
            <p className="text-md text-gray-500">{student.nim}</p>
            <p className="text-md text-gray-500">Semester {student.semester}</p>
          </div>
          <div className="text-center text-sm text-gray-600 mb-8">
            <span>Email : {student.email}</span> | <span>No. Hp : {student.phone}</span>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skill</h3>
            <div className="flex flex-wrap gap-3">
              {student.skills.map(skill => (
                <span key={skill} className="bg-purple-600 text-white px-4 py-1.5 text-md font-semibold rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Proyek dan Tugas Mahasiswa</h3>
            <p className="text-gray-600 leading-relaxed">
              {student.project}
            </p>
          </div>
          <div className="text-center">
            <button 
                onClick={handleRequestUpdate}
                className="bg-purple-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-800 transition-colors"
            >
              Minta Perbarui Portofolio
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}