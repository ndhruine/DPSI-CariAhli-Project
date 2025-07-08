import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus("Link reset password telah dikirim ke email kamu.");
    } catch (error) {
      setStatus("Gagal: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen font-adamina w-full overflow-x-hidden">
      {/* KIRI - FORM */}
      <div className="w-full md:w-1/2 bg-purple-800 text-white flex flex-col justify-center px-6 md:px-16 py-12 relative">
        {/* Garis Oranye di tengah */}
        <div className="hidden md:block absolute top-0 right-0 w-1 bg-orange-500 h-full z-20"></div>

        <div className="max-w-md w-full mx-auto">
          {/* Judul dan Deskripsi */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-medium text-orange-500 font-adlam">
              Lupa Password
            </h2>
            <p className="mt-8 text-sm text-white font-adamina">
              Masukkan alamat email yang terdaftar, dan kami akan mengirimkan tautan untuk mereset password Anda.
            </p>
          </div>

          {/* Label dan Input */}
          <label className="text-sm text-orange-500 block mb-1 font-adamina text-left">
            Email
          </label>
          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-t-4 border-r-4 border-b-4 border-orange-500 mb-8 text-black outline-none 
                       rounded-tr-2xl rounded-br-2xl font-adamina"
          />

          {/* Tombol Reset */}
          <div className="flex justify-center">
            <button
              onClick={handleReset}
              className="bg-orange-500 hover:bg-orange-600 text-purple-800 font-medium py-2 px-10 
                         rounded-full transition font-adlam"
            >
              Reset Password
            </button>
          </div>

          {/* Status */}
          {status && (
            <p className="mt-4 text-sm bg-purple-900 text-white px-4 py-2 rounded font-adamina text-center">
              {status}
            </p>
          )}

          {/* Link Login */}
          <p className="mt-6 text-sm text-orange-500 font-adamina text-center">
            Kembali ke{" "}
            <Link to="/login" className="text-white underline">
              login
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
