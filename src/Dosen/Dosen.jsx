import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DosenSidebar from './DosenSidebar';
import DosenNavbar from './DosenNavbar';

const Dosen = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
      <div className="flex flex-col h-screen">
        <DosenNavbar />

        <div className="flex flex-1 relative">
          <DosenSidebar
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

export default Dosen;
