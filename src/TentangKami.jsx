import React from "react";
import { useNavigate } from "react-router-dom";

export default function TentangKami() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        :root {
          --purple: #4B0082;
          --orange: #FF6F00;
          --teal: #009688;
          --white: #FFFFFF;
          --grayBg: #FAFAFF;
          --font: "Inter", "Helvetica", sans-serif;
        }

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

        .nav {
          height: 76px;
          border-bottom: 4px solid var(--purple);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 60px;
          background: var(--white);
        }

        .logo {
          height: 32px;
          width: auto;
          cursor: pointer;
        }

        .nav-menu {
          display: flex;
          gap: 48px;
          font: 600 16px/1 var(--font);
          text-transform: uppercase;
        }

        .nav-menu button {
          color: var(--purple);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          text-transform: inherit;
          letter-spacing: .4px;
        }

        .nav-menu button.active {
          color: var(--orange);
        }

        .auth-pill {
          display: flex;
          height: 40px;
          width: 220px;
          border-radius: 9999px;
          overflow: hidden;
          border: 2px solid var(--purple);
        }

        .auth-pill button {
          flex: 1;
          border: none;
          cursor: pointer;
          font: 600 14px/1 var(--font);
          text-transform: uppercase;
        }

        .auth-pill .login {
          background: var(--purple);
          color: var(--orange);
        }

        .auth-pill .register {
          background: var(--white);
          color: var(--purple);
          border-left: 2px solid var(--purple);
        }

        .section {
          padding: 64px 80px;
          color: var(--purple);
        }

        .intro {
          display: flex;
          gap: 40px;
          align-items: center;
          margin-bottom: 64px;
          justify-content: space-between;
        }

        .school-img {
          width: 540px;
          height: auto;
        }

        .intro-text {
          max-width: 480px;
        }

        .intro-logo {
          width: 180px;
          height: auto;
          margin-bottom: 8px;
        }

        .intro-text h2 {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .intro-text p {
          font-size: 18px;
          line-height: 1.6;
        }

        .cta-banner {
          background: var(--purple);
          padding: 28px 48px;
          border-radius: 20px;
          box-shadow: 0 6px 0 var(--teal);
          text-align: center;
          margin-bottom: 48px;
        }

        .cta-banner .topline {
          font-size: 18px;
          color: var(--orange);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .cta-banner .bottomline {
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
        }

        .features {
          display: flex;
          gap: 40px;
          justify-content: center;
          max-width: 1280px;
          margin: auto;
        }

        .card {
          flex: 1;
          background: var(--grayBg);
          padding: 28px 32px;
          border-radius: 12px;
        }

        .card-badge {
          width: 40px;
          height: 40px;
          background: var(--purple);
          color: var(--white);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 5px solid var(--teal);
          margin-bottom: 16px;
          font-size: 18px;
        }

        .card h3 {
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .card p {
          font-size: 16px;
          line-height: 1.6;
        }

        @media (max-width: 959px) {
          .section {
            padding: 48px 32px;
          }

          .intro {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }

          .school-img {
            width: 100%;
            max-width: 480px;
          }

          .features {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 599px) {
          .intro-text h2 {
            font-size: 24px;
          }

          .intro-text p {
            font-size: 16px;
          }

          .cta-banner {
            padding: 24px 32px;
          }

          .cta-banner .topline,
          .cta-banner .bottomline {
            font-size: 16px;
          }
        }
      `}</style>

      <header className="nav">
        <img
          className="logo"
          src="/images/logo.png"
          alt="Carilah logo"
          onClick={() => navigate("/")}
        />

        <nav className="nav-menu">
          <button onClick={() => navigate("/home")}>Beranda</button>
          <button className="active">Tentang Kami</button>
        </nav>

        <div className="auth-pill">
          <button className="login" onClick={() => navigate("/login")}>Log In</button>
          <button className="register" onClick={() => navigate("/register")}>Daftar</button>
        </div>
      </header>

      <div className="section">
        <div className="intro">
          <img src="/images/school.png" alt="UAD building" className="school-img" />
          <div className="intro-text">
            <img src="/images/logo.png" alt="CariAhli Logo" className="intro-logo" />
            <h2>C A R I A H L I</h2>
            <p>
              Platform yang dirancang khusus untuk menjembatani mahasiswa Universitas Ahmad Dahlan
              dengan dunia industri.
            </p>
          </div>
        </div>

        <div className="cta-banner">
          <p className="topline">Temukan Inovator Masa Depan di Sini</p>
          <p className="bottomline">
            Proposal terbaik dari mahasiswa UAD siap berkontribusi untuk perkembangan industri Anda
          </p>
        </div>

        <div className="features">
          <div className="card">
            <div className="card-badge">1</div>
            <h3>Portofolio Terkurasi</h3>
            <p>
              Semua portofolio diunggah oleh admin resmi yang memverifikasi keaslian dan kualitasnya,
              memastikan hanya karya terbaik yang tampil.
            </p>
          </div>

          <div className="card">
            <div className="card-badge">2</div>
            <h3>Khusus Mahasiswa UAD</h3>
            <p>
              Eksklusif untuk mahasiswa Universitas Ahmad Dahlan, guna memperkuat identitas kampus
              di dunia industri.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
