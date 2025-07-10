import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const AdminSidebar = ({ isOpen, onToggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/"); // Arahkan ke halaman login atau landing page
      })
      .catch((error) => {
        console.error("Gagal logout:", error);
      });
  };

  return (
    <div
      className={`fixed top-[64px] left-0 h-full transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 bg-white shadow-md flex flex-col justify-between`}
    >
      <button
        onClick={onToggleSidebar}
        className="absolute top-4 right-[-40px] p-2 text-purple-700 bg-white rounded-md shadow"
      >
        ≡
      </button>

      {/* Menu navigasi */}
      <div className="p-4 flex flex-col space-y-2">
        <NavLink
          to="/admin/adashboard"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/kelolaportofolio"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Kelola Portofolio
        </NavLink>
        <NavLink
          to="/admin/tabelmahasiswa"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Data Mahasiswa
        </NavLink>
        <NavLink
          to="/admin/tabeldosen"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Data Dosen
        </NavLink>
        <NavLink
          to="/admin/tabelrekruter"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
          Data Rekruter
        </NavLink>

              {/* Tombol logout di bagian bawah */}
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm font-semibold mt-44"
        >
          Logout
        </button>
      </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
