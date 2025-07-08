import { NavLink } from 'react-router-dom';

const MahasiswaSidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <div
      className={`fixed top-[64px] left-0 h-full transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        w-64 bg-white shadow-md flex flex-col`}
    >
      <button
        onClick={onToggleSidebar}
        className="absolute top-4 right-[-40px] p-2 text-purple-700 bg-White rounded-md shadow"
      >
        ≡
      </button>

      <div className="p-4 flex flex-col space-y-2">
        <NavLink
          to="/mahasiswa/mdashboard"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
        Dashboard
        </NavLink>
        <NavLink
          to="/mahasiswa/portofolio"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-purple-200 font-medium ${
              isActive ? 'text-purple-700' : 'text-black'
            }`
          }
        >
        Portofolio saya
        </NavLink>
      </div>
    </div>
  );
};

export default MahasiswaSidebar;
