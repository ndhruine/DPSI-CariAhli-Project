import React, { useState } from "react";
import "./PortofolioMahasiswaPage.css";

const dummyData = [
  {
    nama: "Indra Gunawan",
    nim: "2100016001",
    skills: ["React JS", "SQL", "UI/UX"],
  },
  {
    nama: "Siti Nurhaliza",
    nim: "2100016025",
    skills: ["React JS", "SQL", "UI/UX"],
  },
  {
    nama: "Rizky Pratama",
    nim: "2100016061",
    skills: ["React JS", "SQL", "UI/UX"],
  },
  {
    nama: "Ahmad Setiawan",
    nim: "2100016101",
    skills: ["React JS", "SQL", "UI/UX"],
  },
  {
    nama: "Indra Gunawan",
    nim: "2100016001",
    skills: ["React JS", "SQL", "UI/UX"],
  },
];

export default function PortofolioMahasiswaPage() {
  const [search, setSearch] = useState("");

  const filtered = dummyData.filter(
    (m) =>
      m.nama.toLowerCase().includes(search.toLowerCase()) ||
      m.nim.includes(search)
  );

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">CARIAHIQ</div>
        <nav>
          <ul>
            <li>Dashboard Saya</li>
            <li className="active">Portofolio Mahasiswa</li>
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
        <section className="portfolio-list-section">
          <h2>Portofolio Mahasiswa</h2>
          <div className="filter-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Cari nama mahasiswa / NIM / skill"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="filter-select">
              <option>Filter</option>
            </select>
            <select className="sort-select">
              <option>Sort by</option>
              <option>Terbaru</option>
              <option>Terlama</option>
            </select>
          </div>
          <div className="card-grid">
            {filtered.map((mhs, idx) => (
              <div className="mhs-card" key={idx}>
                <div className="mhs-nama">{mhs.nama}</div>
                <div className="mhs-nim">{mhs.nim}</div>
                <div className="mhs-skills">
                  {mhs.skills.map((skill, i) => (
                    <span className="skill-badge" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="detail-btn">Lihat detail Portofolio</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}