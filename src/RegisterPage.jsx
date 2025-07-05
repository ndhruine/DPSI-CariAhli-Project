import React from "react";

export default function RegisterPage({ onNavigate }) {
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

        .register-page {
          display: flex;
          height: 100vh;
          font-family: var(--font);
        }

        .form-panel {
          width: 45%;
          min-width: 540px;
          background: var(--purple);
          color: var(--white);
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-panel h1 {
          font-size: 24px;
          color: var(--orange);
          font-weight: 700;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .form-panel .subtitle {
          font-size: 16px;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .form-panel input,
        .form-panel select {
          width: 100%;
          height: 48px;
          padding: 12px 16px;
          margin: 8px 0;
          border: 2px solid var(--orange);
          border-radius: 0 10px 0 10px;
          font-size: 16px;
          background: var(--white);
          color: #333;
          font-family: var(--font);
        }

        .form-panel input::placeholder {
          color: #999;
        }

        .form-panel select {
          cursor: pointer;
          color: #999;
        }

        .form-panel select option {
          color: #333;
        }

        .submit-btn {
          margin-top: 24px;
          height: 48px;
          border: none;
          background: var(--orange);
          color: var(--purple);
          font-weight: 700;
          font-size: 16px;
          border-radius: 9999px;
          cursor: pointer;
          width: 100%;
          max-width: 240px;
          align-self: center;
          text-transform: uppercase;
          font-family: var(--font);
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        .bottom-text {
          margin-top: 18px;
          text-align: center;
          font-size: 14px;
        }

        .bottom-text .orange {
          color: var(--orange);
          font-weight: 500;
        }

        .bottom-text .white {
          color: var(--white);
          font-weight: 500;
          cursor: pointer;
          text-decoration: underline;
        }

        .illustration {
          width: 55%;
          background: url("/images/landing_bg.png") no-repeat center right;
          background-size: cover;
        }

        /* Responsive design */
        @media (max-width: 959px) {
          .register-page {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
          }
          
          .form-panel {
            width: 100%;
            min-width: auto;
            padding: 40px 32px;
          }
          
          .illustration {
            width: 100%;
            height: 300px;
            background-position: center;
            background-size: contain;
          }
        }

        @media (max-width: 599px) {
          .form-panel {
            padding: 32px 24px;
          }
          
          .form-panel h1 {
            font-size: 20px;
          }
          
          .form-panel .subtitle {
            font-size: 14px;
          }
          
          .form-panel input,
          .form-panel select {
            font-size: 14px;
          }
        }
      `}</style>

      {/* ----------  MARKUP  ---------- */}
      <div className="register-page">
        <div className="form-panel">
          <h1>SELAMAT DATANG</h1>
          <p className="subtitle">Buat akun di Cari Ahli</p>
          
          <input type="text" placeholder="Nama Lengkap" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="No. Hp" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Konfirmasi password" required />
          
          <select required>
            <option value="" disabled selected>Saya adalah...</option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="perusahaan">Perusahaan</option>
            <option value="lainnya">Lainnya</option>
          </select>
          
          <button className="submit-btn" onClick={() => onNavigate && onNavigate('home')}>DAFTAR</button>
          
          <p className="bottom-text">
            <span className="orange">Sudah punya akun?</span>{" "}
            <span className="white" onClick={() => onNavigate && onNavigate('login')}>
              Masuk di sini
            </span>
          </p>
        </div>
        
        <div className="illustration" />
      </div>
    </>
  );
} 