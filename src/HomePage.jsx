import React, { useState } from "react";

export default function HomePage({ onNavigate }) {
  const [showLayananDropdown, setShowLayananDropdown] = useState(false);

  return (
    <>
      {/* ----------  STYLES  ---------- */}
      <style>{`
        /* Design tokens */
        :root {
          --purple: #4B0082;
          --orange: #FF6F00;
          --teal: #009688;
          --white: #FFFFFF;
          --font: "Inter", "Helvetica", sans-serif;
        }

        /* Global reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body, #root {
          height: 100%;
          width: 100%;
          background: var(--white);
          font-family: var(--font);
        }

        .page {
          font-family: var(--font);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navigation Bar */
        .navbar {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          border-bottom: 4px solid var(--purple);
          background: var(--white);
          position: relative;
          z-index: 100;
        }

        .logo {
          height: 32px;
          width: auto;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 48px;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 16px;
          color: var(--purple);
          align-items: center;
        }

        .nav-links button {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          color: inherit;
          text-transform: inherit;
          font-weight: inherit;
          position: relative;
        }

        .nav-links .active {
          color: var(--orange);
        }

        .layanan-dropdown {
          position: relative;
        }

        .dropdown-arrow {
          font-size: 12px;
          margin-left: 4px;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--white);
          border: 2px solid var(--purple);
          border-radius: 8px;
          padding: 8px 0;
          min-width: 180px;
          box-shadow: 0 4px 12px rgba(75, 0, 130, 0.15);
          z-index: 200;
        }

        .dropdown-menu button {
          width: 100%;
          padding: 8px 16px;
          text-align: left;
          font-size: 14px;
          text-transform: none;
          color: var(--purple);
        }

        .dropdown-menu button:hover {
          background: #f5f5f5;
          color: var(--orange);
        }

        .profile-icon {
          font-size: 24px;
          cursor: pointer;
          color: var(--purple);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid var(--purple);
          background: var(--white);
        }

        .profile-icon:hover {
          background: var(--purple);
          color: var(--white);
        }

        /* Hero Section */
        .hero {
          display: grid;
          grid-template-columns: minmax(480px,46%) 1fr;
          gap: 40px;
          padding: 100px 60px 0 60px;
          min-height: 680px;
          background: url("/images/landing_bg.png") top right/contain no-repeat;
        }

        .hero-text {
          /* No flex properties needed for grid */
        }

        .tag {
          font: 700 18px/1 var(--font);
          color: var(--orange);
          margin-bottom: 18px;
        }

        .headline {
          font: 800 36px/1.25 var(--font);
          color: var(--purple);
          text-transform: uppercase;
          max-width: 520px;
          margin-bottom: 18px;
        }

        .desc {
          font: 400 18px/1.6 var(--font);
          color: var(--purple);
          max-width: 520px;
          margin-bottom: 28px;
        }

        .hero-img {
          /* Empty div for grid layout, background is on .hero */
        }

        /* Responsive Design */
        @media(max-width:1279px){
          .headline{font-size:32px;}
        }
        @media(max-width:959px){
          .hero{grid-template-columns:1fr;background-position:top 120px right -60px;padding:80px 32px 0 32px;text-align:center;}
          .navbar{padding:0 32px;}
        }
        @media(max-width:599px){
          .headline{font-size:26px;}
          .desc{font-size:16px;}
          .nav-links{gap:24px;}
          .navbar .logo{height:28px;}
          .nav-links button{font-size:14px;}
        }
      `}</style>

      {/* ----------  MARKUP  ---------- */}
      <div className="page">
        <header className="navbar">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="logo"
            onClick={() => onNavigate && onNavigate('home')}
          />
          
          <nav className="nav-links">
            <button className="active">BERANDA</button>
            <button onClick={() => onNavigate && onNavigate('tentang')}>TENTANG KAMI</button>
            <div className="layanan-dropdown">
              <button onClick={() => setShowLayananDropdown(!showLayananDropdown)}>
                LAYANAN <span className="dropdown-arrow">▼</span>
              </button>
              {showLayananDropdown && (
                <div className="dropdown-menu">
                  <button onClick={() => setShowLayananDropdown(false)}>Career Center</button>
                  <button onClick={() => setShowLayananDropdown(false)}>Mahasiswa</button>
                  <button onClick={() => {
                    setShowLayananDropdown(false);
                    onNavigate && onNavigate('perusahaan-dashboard');
                  }}>Perusahaan</button>
                  <button onClick={() => setShowLayananDropdown(false)}>Admin</button>
                </div>
              )}
            </div>
          </nav>
          
          <div className="profile-icon" onClick={() => onNavigate && onNavigate('beranda')}>
            👤
          </div>
        </header>

        <section className="hero">
          <div className="hero-text">
            <p className="tag">PILIHAN TERBAIK</p>
            <h1 className="headline">BUKAN SEKADAR DATA, TAPI POTENSI NYATA</h1>
            <p className="desc">
              Dibuat khusus untuk menghubungkan dunia akademik dengan dunia kerja. 
              Jelajahi proposal mahasiswa siap kerja, dan temukan kandidat terbaik Anda.
            </p>
          </div>
          <div className="hero-img" />
        </section>
      </div>
    </>
  );
} 