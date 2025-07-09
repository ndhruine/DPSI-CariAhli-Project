import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PerusahaanDashboard from './PerusahaanDashboard';
import KandidatCard from './KandidatCard';
import DetailKandidat from './DetailKandidat';
import WawancaraContent from './WawancaraContent';

const Perusahaan = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [selectedKandidat, setSelectedKandidat] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setSelectedKandidat(null);
  };

  const handleKandidatClick = (kandidat) => {
    setSelectedKandidat(kandidat);
  };

  const handleBackToDashboard = () => {
    setSelectedKandidat(null);
  };

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
          font-family: 'Inter', sans-serif;
          background-color: #f5f5f5;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .content-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
      `}</style>
      
      <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      
      <div className="main-content">
        <Header />
        
        <div className="content-area">
          {selectedKandidat ? (
            <DetailKandidat 
              kandidat={selectedKandidat} 
              onBack={handleBackToDashboard}
            />
          ) : activeMenu === 'dashboard' ? (
            <PerusahaanDashboard onKandidatClick={handleKandidatClick} />
          ) : activeMenu === 'daftar-kandidat' ? (
            <div>
              <h2>Daftar Kandidat</h2>
              <KandidatCard onKandidatClick={handleKandidatClick} />
            </div>
          ) : activeMenu === 'wawancara' ? (
            <WawancaraContent />
          ) : (
            <div>
              <h2>Logout</h2>
              <p>Terima kasih telah menggunakan CariAhli</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Perusahaan;
