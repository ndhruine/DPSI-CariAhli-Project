import React, { useState } from "react";

export default function ResetPasswordPage({ onNavigate }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

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

        .reset-page {
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
          margin-bottom: 28px;
        }

        .input-label {
          color: var(--orange);
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 6px;
          display: block;
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 24px;
        }

        .input-wrapper input {
          width: 100%;
          height: 48px;
          padding: 12px 16px;
          padding-right: 48px;
          font-size: 16px;
          background: var(--white);
          border: 2px solid var(--orange);
          border-radius: 0 10px 0 10px;
          color: #333;
          font-family: var(--font);
        }

        .input-wrapper input::placeholder {
          color: #999;
        }

        .eye-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
          cursor: pointer;
          color: var(--purple);
          user-select: none;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .eye-icon:hover {
          opacity: 0.7;
        }

        .submit-btn {
          margin-top: 12px;
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

        .illustration {
          width: 55%;
          background: url("/images/landing_bg.png") no-repeat center right;
          background-size: cover;
        }

        /* Responsive design */
        @media (max-width: 959px) {
          .reset-page {
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
          
          .input-label {
            font-size: 14px;
          }
          
          .input-wrapper input {
            font-size: 14px;
          }
        }
      `}</style>

      {/* ----------  MARKUP  ---------- */}
      <div className="reset-page">
        <div className="form-panel">
          <h1>Reset Password</h1>

          <label className="input-label">Password Baru</label>
          <div className="input-wrapper">
            <input 
              type={showPassword1 ? "text" : "password"} 
              placeholder="Masukkan password baru" 
              required 
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? "👁️" : "🙈"}
            </span>
          </div>

          <label className="input-label">Konfirmasi Password Baru</label>
          <div className="input-wrapper">
            <input 
              type={showPassword2 ? "text" : "password"} 
              placeholder="Konfirmasi password baru" 
              required 
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? "👁️" : "🙈"}
            </span>
          </div>

          <button className="submit-btn" onClick={() => onNavigate && onNavigate('login')}>
            Simpan Perubahan
          </button>
        </div>

        <div className="illustration" />
      </div>
    </>
  );
} 