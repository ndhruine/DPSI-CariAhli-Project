import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const DosenSidebar = ({ isOpen, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/"); // redirect ke halaman login atau beranda
      })
      .catch((error) => {
        console.error("Logout gagal:", error);
      });
  };

  return (
    <div
      className={`fixed top-[64px] left-0 h-full transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 bg-white shadow-md flex flex-col`}
    >
      {/* Tombol toggle sidebar */}
      <button
        onClick={onToggleSidebar}
        className="absolute top-4 right-[-40px] p-2 text-purple-700 bg-white rounded-md shadow"
      >
        ≡
      </button>

      {/* Navigasi utama */}
      <div className="p-4 flex flex-col space-y-2 flex-grow">
        <NavLink
          to="/dosen/ddashboard"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dosen/portofoliomahasiswa"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Portofolio Mahasiswa
        </NavLink>

              {/* Tombol logout di bagian bawah sidebar */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm font-semibold mt-80"
        >
          Logout
        </button>
      </div>
      </div>
    </div>
  );
};

export default DosenSidebar;
