import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AdminNavbar onToggleSidebar={() => setShowSidebar(!showSidebar)} />

      <div className="flex flex-1 relative">
        <AdminSidebar 
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

export default Admin;