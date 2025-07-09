import React from "react";
import { Menu } from "lucide-react";

function Topbar({ setSidebarOpen }) {
  return (
    <div className="bg-white shadow px-6 py-4 flex items-center">
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="text-gray-700 hover:text-blue-500 focus:outline-none"
      >
        <Menu size={24} />
      </button>
      <h1 className="ml-4 text-xl font-semibold text-gray-800">Career Center</h1>
    </div>
  );
}

export default Topbar;
