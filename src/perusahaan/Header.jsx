import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <style>{`
        .header {
          height: 70px;
          background-color: white;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .header-title {
          font-size: 24px;
          font-weight: bold;
          color: #4B0082;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #f5f5f5;
          padding: 8px 15px;
          border-radius: 25px;
          border: 1px solid #ddd;
        }

        .search-input {
          border: none;
          background: none;
          outline: none;
          font-size: 14px;
          color: #666;
          width: 200px;
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-icon {
          color: #666;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #009688;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
        }

        .profile-name {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .profile-role {
          font-size: 12px;
          color: #666;
        }
      `}</style>
      
      <div className="header-title">
        Perusahaan
      </div>

      <div className="header-right">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Cari Kandidat"
          />
        </div>

        <div className="profile-section">
          <div className="profile-avatar">
            👤
          </div>
          <div className="profile-info">
            <div className="profile-name">Admin</div>
            <div className="profile-role">Perusahaan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
