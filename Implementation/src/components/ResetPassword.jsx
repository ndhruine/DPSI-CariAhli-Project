import { useState } from "react";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useSearchParams, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = params.get("oobCode");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      setStatus("Password dan konfirmasi tidak sama.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      navigate("/login");
    } catch (error) {
      setStatus("Gagal reset password: " + error.message);
    }
  };

  return (
    <div className="flex min-h-screen font-adamina w-full overflow-hidden">
      {/* KIRI - FORM */}
      <div className="w-1/2 bg-purple-800 text-orange-500 flex items-center justify-center relative px-10 py-12">
        <div className="absolute top-0 right-0 w-1 bg-orange-500 h-full z-20"></div>

        <div className="max-w-md w-full z-30 relative">
          <h2 className="text-2xl md:text-3xl font-adlam mb-2 font-bold">
            Reset Password
          </h2>
          <p className="mb-6 text-orange-400 text-sm font-normal">
            Masukkan password baru kamu
          </p>

          {/* Input Password Baru */}
          <div className="mb-4 relative">
            <label className="block mb-1 text-sm">Password Baru</label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Masukkan password baru"
              className="w-full px-4 py-2 pr-10 border-2 border-orange-500 rounded-tr-md text-black outline-none font-adamina bg-white placeholder:text-gray-400"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showNewPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Input Konfirmasi Password */}
          <div className="mb-6 relative">
            <label className="block mb-1 text-sm">Konfirmasi Password Baru</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Konfirmasi password baru"
              className="w-full px-4 py-2 pr-10 border-2 border-orange-500 rounded-br-md text-black outline-none font-adamina bg-white placeholder:text-gray-400"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-8 text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Tombol Simpan */}
          <button
            onClick={handleResetPassword}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full font-adlam"
          >
            Simpan Perubahan
          </button>

          {status && (
            <p className="mt-4 text-sm bg-purple-900 text-white px-4 py-2 rounded">
              {status}
            </p>
          )}
        </div>
      </div>

      {/* KANAN - GAMBAR */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center relative overflow-hidden">
        <img
          src="/images/zigzag.png"
          alt="garis"
          className="absolute top-0 left-0 w-[95%] h-auto z-0"
        />
        <img
          src="/images/kacapembesar.png"
          alt="kacapembesar"
          className="relative z-10 w-[45%] mt-20"
        />
        <img
          src="/images/teropong.png"
          alt="teropong"
          className="relative z-10 w-[45%] mb-20"
        />
      </div>
    </div>
  );
}
