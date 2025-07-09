import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ activeMenu, onMenuClick }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // arahkan ke halaman login
      })
      .catch((error) => {
        console.error("Gagal logout:", error);
      });
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '/images/icon/dashboard.png' },
    { id: 'daftar-kandidat', label: 'Daftar Kandidat', icon: '/images/icon/profile.png' },
    { id: 'wawancara', label: 'Wawancara', icon: '/images/icon/calender.png' },
  ];

  return (
    <div className="sidebar">
      <style>{`
        .sidebar {
          width: 250px;
          background-color: #ffffff;
          padding: 20px 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .logo-section {
          padding: 0 20px 30px 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: bold;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color: black;
        }

        .menu-item:hover {
          background-color: #f5f5f5;
        }

        .menu-item.active {
          background-color: #FF6F00;
          color: white;
        }

        .menu-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
          filter: brightness(0);
        }

        .menu-item.active .menu-icon {
          filter: brightness(0) invert(1);
        }

        .logout-button {
          margin: 20px;
          background-color: #ef4444;
          color: white;
          padding: 10px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .logout-button:hover {
          background-color: #dc2626;
        }
      `}</style>

      <div>
        <div className="logo-section">
          <div className="logo">
            <span><img src="/images/logo.png" alt="Logo" /></span>
          </div>
        </div>

        <nav className="menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => onMenuClick(item.id)}
            >
              <img src={item.icon} alt={item.label} className="menu-icon" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
