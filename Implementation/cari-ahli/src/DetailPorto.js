import React from "react";
import { Link } from "react-router-dom";
import "./DetailPorto.css";

export default function PortofolioMahasiswaDetail() {
  const data = {
    nama: "Indra Gunawan",
    nim: "2100016001",
    semester: 8,
    email: "indragwn21@gmail.com",
    hp: "081245638971",
    skills: ["React JS", "UI/UX", "SQL"],
    proyek:
      "Membuat aplikasi berbasis web untuk mencatat kehadiran mahasiswa secara real-time dengan autentikasi dosen. Data absensi tersimpan dalam database dan dapat diunduh dalam format Excel. Teknologi yang digunakan yaitu React JS, Node.js, MySQL",
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">CARI AHLI</div>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ color: "#5d2e8c", textDecoration: "none" }}>
                Dashboard Saya
              </Link>
            </li>
            <li className="active">
              <Link to="/portofolio" style={{ color: "#5d2e8c", textDecoration: "none" }}>
                Portofolio Mahasiswa
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div></div>
          <div className="user">
            <span className="icon">👤</span> Dosen
          </div>
        </header>
        <section className="detail-section">
          <h2 className="detail-title">Detail Portofolio Mahasiswa</h2>
          <div className="notif-warning">
            <span className="notif-icon">🔔</span>
            Portofolio belum diperbarui
          </div>
          <div className="portfolio-detail">
            <div className="avatar">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="black">
                <circle cx="12" cy="8" r="6" />
                <ellipse cx="12" cy="18" rx="9" ry="6" />
              </svg>
            </div>
            <div className="detail-nama">{data.nama}</div>
            <div className="detail-nim">{data.nim}</div>
            <div className="detail-semester">Semester {data.semester}</div>
            <div className="detail-contact">
              <b>Email :</b> <span>{data.email}</span> &nbsp;|&nbsp; <b>No. Hp :</b> <span>{data.hp}</span>
            </div>
            <div className="detail-skill-title">Skill</div>
            <div className="detail-skills">
              {data.skills.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="detail-proyek-title">Proyek dan Tugas Mahasiswa</div>
            <div className="detail-proyek">{data.proyek}</div>
            <button className="btn-minta">Minta Perbarui Portofolio</button>
          </div>
        </section>
      </main>
    </div>
  );
}