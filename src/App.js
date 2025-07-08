// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Halaman umum
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import TentangKami from "./TentangKami";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";
import MahasiswaDashboard from "./Mahasiswa/MahasiswaDashboard";
import MahasiswaPortofolio from "./Mahasiswa/MahasiswaPortofolio";

// Halaman dashboard berdasarkan role
import Admin from "./Admin/Admin";
import Mahasiswa from "./Mahasiswa/Mahasiswa";
import TabelMahasiswa from "./Admin/TabelMahasiswa";
import TabelDosen from "./Admin/TabelDosen";
import KelolaPortofolio from "./Admin/KelolaPortofolio";
import TambahPortofolio from "./Admin/TambahPortofolio";
import AdminDashboard from "./Admin/AdminDashboard";
import DetailPortofolio from "./Admin/DetailPortofolio";
import TabelRekruter from "./Admin/TabeRekruter";

function App() {
  return (
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/tentang" element={<TentangKami />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Halaman dashboard sesuai role */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="adashboard" element={<AdminDashboard />} />
          <Route path="tabelmahasiswa" element={<TabelMahasiswa />} />
          <Route path="tabeldosen" element={<TabelDosen />} />
          <Route path="tabelrekruter" element={<TabelRekruter />} />
          <Route path="kelolaportofolio" element={<KelolaPortofolio />} />
          <Route path="tambah-portofolio" element={<TambahPortofolio />} />
          <Route path="detailportofolio/:id" element={<DetailPortofolio />} />
        </Route>
        <Route path="/mahasiswa" element={<Mahasiswa />}>
          <Route index element={<MahasiswaDashboard />} />
          <Route path="mdashboard" element={<MahasiswaDashboard />} />
          <Route path="portofolio" element={<MahasiswaPortofolio />} />
        </Route>
      </Routes>
  );
}

export default App;
