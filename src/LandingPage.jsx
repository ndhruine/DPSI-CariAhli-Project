import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        :root {
          --purple: #4B0082;
          --orange: #FF6F00;
          --teal: #009688;
          --white: #FFFFFF;
          --gutter: 60px;
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
          padding: 0 var(--gutter);
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
          color: var(--purple);
        }

        .nav-menu button {
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          color: inherit;
          text-transform: inherit;
          letter-spacing: 0.4px;
        }

        .nav-menu .active {
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

        .hero {
          display: grid;
          grid-template-columns: minmax(480px, 46%) 1fr;
          gap: 40px;
          padding: 100px var(--gutter) 0 var(--gutter);
          min-height: 680px;
          background: url("/images/landing_bg.png") top right / contain no-repeat;
        }

        .tagline {
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

        .bodycopy {
          font: 400 18px/1.6 var(--font);
          color: var(--purple);
          max-width: 520px;
          margin-bottom: 28px;
        }

        .cta {
          display: flex;
          width: 260px;
          height: 48px;
          border-radius: 9999px;
          overflow: hidden;
        }

        .cta button {
          flex: 1;
          border: none;
          cursor: pointer;
          font: 700 15px/1 var(--font);
          text-transform: uppercase;
        }

        .cta .login-btn {
          background: var(--purple);
          color: var(--orange);
        }

        .cta .signup-btn {
          background: var(--white);
          color: var(--purple);
          border: 2px solid var(--purple);
        }

        @media (max-width: 1279px) {
          .headline {
            font-size: 32px;
          }
        }

        @media (max-width: 959px) {
          .hero {
            grid-template-columns: 1fr;
            background-position: top 120px right -60px;
            padding: 80px 32px 0 32px;
            text-align: center;
          }

          .cta {
            margin: 0 auto;
          }

          .nav {
            padding: 0 32px;
          }
        }

        @media (max-width: 599px) {
          .headline {
            font-size: 26px;
          }

          .bodycopy {
            font-size: 16px;
          }

          .nav-menu {
            gap: 24px;
          }

          .logo {
            height: 28px;
          }

          .nav-menu button {
            font-size: 14px;
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
          <button onClick={() => navigate("/")} className="active">Beranda</button>
          <button onClick={() => navigate("/tentang")}>Tentang Kami</button>
        </nav>

        <div className="auth-pill">
          <button className="login" onClick={() => navigate("/login")}>Log In</button>
          <button className="register" onClick={() => navigate("/register")}>Daftar</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <div className="tagline">PILIHAN TERBAIK</div>
          <h1 className="headline">BUKAN SEKADAR DATA, TAPI POTENSI NYATA</h1>
          <p className="bodycopy">
            Dibuat khusus untuk menghubungkan dunia akademik dengan dunia kerja.
            Jelajahi proposal mahasiswa siap kerja, dan temukan kandidat terbaik Anda.
          </p>

          <div className="cta">
            <button className="login-btn" onClick={() => navigate("/login")}>LOG IN</button>
            <button className="signup-btn" onClick={() => navigate("/perusahaan")}>Lihat Portofolio</button>
          </div>
        </div>
        <div />
      </section>
    </>
  );
}
