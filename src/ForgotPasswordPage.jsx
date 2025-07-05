import React from "react";

export default function ForgotPasswordPage({ onNavigate }) {
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

        .forgot-page {
          display: flex;
          height: 100vh;
          font-family: var(--font);
          overflow: hidden;
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
          margin-bottom: 12px;
        }

        .form-panel p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .input-label {
          color: var(--orange);
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 8px;
          display: block;
        }

        .form-panel input {
          width: 100%;
          height: 48px;
          padding: 12px 16px;
          background: var(--white);
          border: 2px solid var(--orange);
          border-radius: 0 10px 0 10px;
          font-size: 16px;
          margin-bottom: 24px;
          color: #333;
          font-family: var(--font);
        }

        .form-panel input::placeholder {
          color: #999;
        }

        .submit-btn {
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

        .back-link {
          margin-top: 18px;
          font-size: 14px;
          color: var(--orange);
          text-align: center;
          cursor: pointer;
          font-weight: 500;
        }

        .back-link:hover {
          text-decoration: underline;
        }

        .illustration {
          width: 55%;
          background: url("/images/landing_bg.png") no-repeat center right;
          background-size: cover;
        }

        /* Responsive design */
        @media (max-width: 959px) {
          .forgot-page {
            flex-direction: column;
            height: auto;
            min-height: 100vh;
            overflow: auto;
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
          
          .form-panel p {
            font-size: 14px;
          }
          
          .form-panel input {
            font-size: 14px;
          }
          
          .input-label {
            font-size: 14px;
          }
        }
      `}</style>

      {/* ----------  MARKUP  ---------- */}
      <div className="forgot-page">
        <div className="form-panel">
          <h1>Lupa Password</h1>
          <p>
            Masukkan alamat email yang terdaftar, dan kami akan mengirimkan tautan untuk mereset password Anda.
          </p>
          
          <label className="input-label">Email</label>
          <input type="email" placeholder="Masukkan email Anda" required />
          
          <button className="submit-btn" onClick={() => onNavigate && onNavigate('reset-password')}>Reset Password</button>
          
          <p className="back-link" onClick={() => onNavigate && onNavigate('login')}>
            Kembali ke login
          </p>
        </div>
        
        <div className="illustration" />
      </div>
    </>
  );
} 