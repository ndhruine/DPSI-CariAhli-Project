import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Silakan isi email dan password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        alert("Login berhasil!");
        navigate(`/${role}`); // navigasi otomatis ke /mahasiswa, /admin, dst
      } else {
        alert("Data pengguna tidak ditemukan.");
      }
    } catch (error) {
      alert("Gagal login: " + error.message);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --purple: #4B0082;
          --orange: #FF6F00;
          --white: #FFFFFF;
          --gray: #999999;
          --font: "Inter", "Helvetica", sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-page {
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
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .form-panel .subtitle {
          font-size: 16px;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .form-panel input {
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
          color: var(--gray);
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

        .bottom-link {
          margin-top: 12px;
          font-size: 14px;
          text-align: center;
          line-height: 1.5;
        }

        .bottom-link .orange {
          color: var(--orange);
          font-weight: 500;
        }

        .bottom-link .white {
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

        @media (max-width: 959px) {
          .login-page {
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

          .form-panel .subtitle {
            font-size: 14px;
          }

          .form-panel input {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="form-panel">
          <h1 style={{ color: "#FF6F00" }}>SELAMAT DATANG</h1>
          <p>Masuk untuk melanjutkan</p>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="submit-btn" onClick={handleLogin}>MASUK</button>
        
          <p className="bottom-link">
            <span className="orange">Lupa Password?</span>{" "}
            <span className="white" onClick={() => navigate("/forgot-password")}>
              Klik di sini
            </span>
          </p>

          <p className="bottom-link">
            <span className="orange">Belum punya akun?</span>{" "}
            <span className="white" onClick={() => navigate("/register")}>
              Daftar di sini
            </span>
          </p>
        </div>
        <div className="illustration" />
      </div>
    </>
  );
}
