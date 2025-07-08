import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [nama, setNama] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== konfirmasi) {
      alert("Password dan konfirmasi tidak cocok");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Akun berhasil dibuat!");
      navigate("/login");
    } catch (error) {
      alert("Gagal daftar: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen font-adamina w-full overflow-x-hidden">
      {/* KIRI - FORM */}
      <div className="w-1/2 bg-purple-800 text-orange-500 flex flex-col justify-center px-10 py-12 relative">
        <div className="absolute top-0 right-0 w-1 bg-orange-500 h-full z-20"></div>

        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-adlam mb-1">SELAMAT DATANG</h2>
          <p className="mb-8 text-orange-400 text-sm font-normal">
            Buat akun di Cari Ahli
          </p>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border-t-4 border-r-4 border-orange-500 mb-3 text-black outline-none rounded-tr-2xl font-adamina"
            onChange={(e) => setNama(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border-r-4 border-orange-500 mb-3 text-black outline-none font-adamina"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="No. Hp"
            className="w-full px-4 py-2 border-r-4 border-orange-500 mb-3 text-black outline-none font-adamina"
            onChange={() => null} // Diabaikan
          />

          {/* Password */}
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 pr-10 border-r-4 border-orange-500 text-black outline-none font-adamina"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Konfirmasi Password */}
          <div className="relative mb-3">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Konfirmasi password"
              className="w-full px-4 py-2 pr-10 border-r-4 border-orange-500 text-black outline-none font-adamina"
              onChange={(e) => setKonfirmasi(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showConfirm ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <select
            className="w-full px-4 py-2 border-b-4 border-r-4 border-orange-500 mb-8 text-black outline-none rounded-br-2xl font-adamina"
            onChange={(e) => setRole(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Saya adalah...
            </option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="dosen">Dosen</option>
            <option value="rekruter">Rekruter</option>
            <option value="perusahaan">Perusahaan</option>
          </select>

          <div className="flex justify-center">
            <button
              onClick={handleRegister}
              className="bg-orange-500 hover:bg-orange-600 text-purple-800 font-medium py-2 px-10 rounded-full font-adlam"
            >
              DAFTAR
            </button>
          </div>

          <p className="mt-6 text-sm text-orange-400 font-adamina text-left">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-white underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>

      {/* KANAN - GAMBAR */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex items-center justify-center relative h-[300px] md:h-[400px]">
        <img
          src="/images/zigzag.png"
          alt="garis"
          className="absolute w-[80%] md:w-[90%] top-[0%] left-[10%] z-0"
        />
        <img
          src="/images/teropong.png"
          alt="teropong"
          className="relative z-10 w-[45%] translate-y-4 mt-96 right-4"
        />
        <img
          src="/images/kacapembesar.png"
          alt="kacapembesar"
          className="relative z-10 w-[50%] mt-6 mb-20 right-4"
        />
      </div>
    </div>
  );
}
