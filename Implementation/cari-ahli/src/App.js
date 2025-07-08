// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Kandidat from './pages/DaftarKandidat';
import Wawancara from './pages/Wawancara';
import SemuaKandidat from './pages/SemuaKandidat';
import DetailKandidat from './pages/DetailKandidat';
import KandidatBaru from './pages/KandidatBaru'; 
import DetailWawancara from "./pages/DetailWawancara";
import DetailRiwayat from './pages/DetailRiwayat';
import ProfilPerusahaan from './pages/ProfilPerusahaan';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-[#f9f9fb]">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kandidat" element={<Kandidat />} />
            <Route path="/wawancara" element={<Wawancara />} />
            <Route path="/semua-kandidat" element={<SemuaKandidat />} />
            <Route path="/detail-kandidat" element={<DetailKandidat />} /> 
            <Route path="/kandidat-baru" element={<KandidatBaru />} /> 
            <Route path="/detail-wawancara" element={<DetailWawancara />} />
            <Route path="/riwayat-wawancara" element={<DetailRiwayat />} />
            <Route path="/profil-perusahaan" element={<ProfilPerusahaan />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
