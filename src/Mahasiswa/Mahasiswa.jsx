import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MahasiswaSidebar from './MahasiswaSidebar';
import MahasiswaNavbar from './MahasiswaNavbar';

const Mahasiswa = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
      <div className="flex flex-col h-screen">
        <MahasiswaNavbar />

        <div className="flex flex-1 relative">
          <MahasiswaSidebar
            isOpen={showSidebar}
            onToggleSidebar={() => setShowSidebar(!showSidebar)}
          />

          <div
            className={`transition-all duration-300 ease-in-out flex-1 p-8 ${
              showSidebar ? 'ml-64' : 'ml-0'
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
  );
};

export default Mahasiswa;
