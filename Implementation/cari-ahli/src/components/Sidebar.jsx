// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaUserTie, FaClipboardList, FaCalendarCheck } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    navigate('/dashboard'); // mengarah ke halaman dashboard
  };

  return (
    <div className="w-60 min-h-screen bg-white shadow-md px-4 py-6">
      <h2 className="text-xl font-bold mb-10 text-purple-700">CARI AHLi</h2>

      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
            isActive('/dashboard') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <FaUserTie />
          Dashboard
        </Link>

        <Link
          to="/kandidat"
          className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
            isActive('/kandidat') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <FaClipboardList />
          Daftar Kandidat
        </Link>

        <Link
          to="/wawancara"
          className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
            isActive('/wawancara') ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <FaCalendarCheck />
          Wawancara
        </Link>

        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 mt-6 text-red-500 hover:bg-red-100 rounded-md font-medium"
        >
          <FiLogOut />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
