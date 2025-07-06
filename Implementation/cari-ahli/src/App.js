import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PortofolioMahasiswaPage from "./Portofoliomahasiswa";
import PortofolioMahasiswaDetail from "./DetailPorto"; // Import komponen detail
import "./App.css";

function DashboardPenilaian() {
  const [portfolios, setPortfolios] = useState([
    {
      nama: "Andi",
      judul: "Sistem Pendukung Keputusan",
      status: "Belum diperbarui",
      tanggal: "-",
      feedback: { skill: 1, pengetahuan: 1, pengalaman: 1, komentar: "" },
    },
    {
      nama: "Sinta",
      judul: "Aplikasi E-learning",
      status: "Sudah diperbarui",
      tanggal: "13 Juni 2025",
      feedback: { skill: 1, pengetahuan: 1, pengalaman: 1, komentar: "" },
    },
  ]);

  const [form, setForm] = useState({
    skill: 1,
    pengetahuan: 1,
    pengalaman: 1,
    komentar: "",
  });

  const [selectedIndex] = useState(0);

  const handleSimpan = () => {
    const tanggalBaru = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const updatedPortfolios = portfolios.map((item, idx) =>
      idx === selectedIndex
        ? {
            ...item,
            status: "Sudah diperbarui",
            tanggal: tanggalBaru,
            feedback: { ...form },
          }
        : item
    );
    setPortfolios(updatedPortfolios);
    alert("Penilaian berhasil disimpan!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">CARI AHLI</div>
        <nav>
          <ul>
            <li className="active">Dashboard Saya</li>
            <li>
              <Link to="/portofolio" style={{ color: "#5d2e8c", textDecoration: "none" }}>
                Portofolio Mahasiswa
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div>Selamat Datang di Cari Ahli</div>
          <div className="user">
            <span className="icon">👤</span> Dosen
          </div>
        </header>
        <section className="portfolio-section">
          <div className="alert">
            <span>📢</span> Portofolio belum diperbarui
            <button className="update-btn">Minta Perbarui Portofolio</button>
          </div>
          <h3>Daftar portofolio Mahasiswa</h3>
          <table className="portfolio-table">
            <thead>
              <tr>
                <th>Nama Mahasiswa</th>
                <th>Judul Portofolio</th>
                <th>Status Portofolio</th>
                <th>Tanggal Diperbarui</th>
              </tr>
            </thead>
            <tbody>
              {portfolios.map((item, idx) => (
                <tr key={item.nama}>
                  <td>{item.nama}</td>
                  <td>{item.judul}</td>
                  <td>
                    <span
                      className={
                        "status " +
                        (item.status === "Sudah diperbarui"
                          ? "updated"
                          : "pending")
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{item.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="feedback-section">
            <div className="feedback">
              <h4>Feedback & Penilaian</h4>
              <div className="rating">
                <div>
                  <label>Skill</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    name="skill"
                    value={form.skill}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Pengetahuan</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    name="pengetahuan"
                    value={form.pengetahuan}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Pengalaman</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    name="pengalaman"
                    value={form.pengalaman}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <textarea
                placeholder="Komentar atau Feedback"
                name="komentar"
                value={form.komentar}
                onChange={handleChange}
              ></textarea>
              <button className="save-btn" onClick={handleSimpan}>
                Simpan Penilaian
              </button>
            </div>
            <div className="monitoring">
              <h4>Monitoring Perkembangan Mahasiswa</h4>
              {/* Kosong sesuai gambar */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPenilaian />} />
        <Route path="/portofolio" element={<PortofolioMahasiswaPage />} />
        <Route path="/detail/:nim" element={<PortofolioMahasiswaDetail />} /> {/* Route detail */}
      </Routes>
    </Router>
  );
}