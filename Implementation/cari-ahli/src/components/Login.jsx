import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil");
      navigate("/");
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen font-adamina">
      {/* KIRI - FORM */}
      <div className="w-full md:w-1/2 bg-purple-800 text-orange-500 flex flex-col justify-center px-10 md:px-28 py-12 relative">
        {/* Garis Oranye di tengah */}
        <div className="hidden md:block absolute top-0 right-0 w-1 bg-orange-500 h-full z-20"></div>

        <h2 className="text-3xl font-medium mb-1 font-adlam">SELAMAT DATANG</h2>
        <p className="mb-10 text-orange-400 text-sm font-normal">Masuk dan lanjutkan pencarian Anda</p>

        <input
          type="email"
          placeholder="Email atau Username"
          className="w-full px-4 py-2 border-t-4 border-r-4 border-orange-500 mb-4 text-black outline-none
                     rounded-tr-2xl rounded-bl-none rounded-br-none rounded-tl-none font-adamina"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border-b-4 border-r-4 border-orange-500 mb-10 text-black outline-none
                     rounded-br-2xl rounded-tl-none rounded-tr-none rounded-bl-none font-adamina"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Tombol MASUK tengah & lebih panjang */}
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className=" bg-orange-500 hover:bg-orange-600 
                       text-purple-800 font-medium py-2 px-10 rounded-full transition font-adlam"
          >
            MASUK
          </button>
        </div>

        <p className="mt-6 text-sm text-orange-400 font-adamina">
          Lupa Password?{" "}
          <Link to="/forgot" className="text-white underline">
            Klik di sini
          </Link>
          <br />
          Belum punya akun?{" "}
          <Link to="/register" className="text-white underline">
            Daftar di sini
          </Link>
        </p>
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
