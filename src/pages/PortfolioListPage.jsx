// src/pages/PortfolioListPage.jsx
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PortfolioCard from '../components/PortfolioCard';
import { students } from '../data/MockData';

export default function PortfolioListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.nim.includes(searchTerm) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <MainLayout>
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Portofolio Mahasiswa</h1>
             <div className="flex items-center gap-2 p-2 bg-white rounded-full shadow-sm">
                <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700">D</div>
                <span className="font-semibold text-gray-700">Dosen</span>
             </div>
        </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari nama mahasiswa / NIM / skill"
          className="flex-grow p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
          <option>Filter</option>
          {/* Add filter options here */}
        </select>
        <select className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
          <option>Terbaru</option>
          <option>Terlama</option>
        </select>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map(student => (
          <PortfolioCard key={student.id} student={student} />
        ))}
      </div>
    </MainLayout>
  );
}