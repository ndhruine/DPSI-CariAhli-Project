import React from 'react';

const Sidebar = ({ activeMenu, onMenuClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '/images/icon/dashboard.png' },
    { id: 'daftar-kandidat', label: 'Daftar Kandidat', icon: '/images/icon/profile.png' },
    { id: 'wawancara', label: 'Wawancara', icon: '/images/icon/calender.png' },
    { id: 'logout', label: 'Logout', icon: '/images/icon/logout.png' }
  ];

  return (
    <div className="sidebar">
      <style>{`
        .sidebar {
          
          width: 250px;
          background-color:rgb(255, 255, 255);
          color: white;
          padding: 20px 0;
          height: 100vh;
          position: relative;
        }

        .logo-section {
          padding: 0 20px 30px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: bold;
          
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background-color: #FF6F00;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
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
          color: white;
          width: 100%;
          text-align: left;
          font-size: 16px;
          color : black;
        }

        .menu-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .menu-item.active {
          background-color: #FF6F00;
          border-left: 4px solid #fff;
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
      `}</style>
      
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
  );
};

export default Sidebar;
