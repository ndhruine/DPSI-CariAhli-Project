import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nama: "",
    email: "",
    hp: "",
    password: "",
    konfirmasi: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { nama, email, hp, password, konfirmasi, role } = form;

    if (!nama || !email || !hp || !password || !konfirmasi || !role) {
      alert("Semua kolom wajib diisi.");
      return;
    }

    if (password !== konfirmasi) {
      alert("Password tidak cocok.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        nama,
        email,
        hp,
        role,
      });

      alert("Registrasi berhasil! Anda akan diarahkan ke halaman login.");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      alert("Gagal registrasi: " + error.message);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --purple: #4B0082;
          --orange: #FF6F00;
          --white: #FFFFFF;
          --font: "Inter", "Helvetica", sans-serif;
        }

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
          color: ${form.role ? "#333" : "#999"};
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

        @media (max-width: 959px) {
          .register-page {
            flex-direction: column;
            height: auto;
          }
          .form-panel {
            width: 100%;
            padding: 40px 32px;
          }
          .illustration {
            width: 100%;
            height: 300px;
            background-position: center;
          }
        }

        @media (max-width: 599px) {
          .form-panel {
            padding: 32px 24px;
          }
          .form-panel h1 {
            font-size: 20px;
          }
          .form-panel input,
          .form-panel select {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="register-page">
        <div className="form-panel">
          <h1 style={{ color: "#FF6F00" }}>SELAMAT DATANG</h1>
          <p>Buat akun di Cari Ahli</p>
          <input type="text" name="nama" placeholder="Nama Lengkap" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="tel" name="hp" placeholder="No. Hp" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          <input type="password" name="konfirmasi" placeholder="Konfirmasi password" onChange={handleChange} />
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="" disabled hidden>Saya adalah...</option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="rekruter">Perusahaan</option>
            <option value="dosen">Dosen</option>
            <option value="admin">Admin</option>
          </select>
          <button className="submit-btn" onClick={handleRegister}>DAFTAR</button>
        
          <p className="bottom-text">
            <span className="orange">Sudah punya akun?</span>{" "}
            <span className="white" onClick={() => navigate("/login")}>
              Masuk di sini
            </span>
          </p>
        </div>
        <div className="illustration" />
      </div>
    </>
  );
}
