import React from "react";
import {
  Home,
  Users,
  MessageSquare,
  Briefcase,
  Share2,
  Calendar,
  LogOut,
} from "lucide-react";

const menu = [
  { label: "Dashboard", icon: <Home /> },
  { label: "Data Mahasiswa", icon: <Users /> },
  { label: "Feedback Industri", icon: <MessageSquare /> },
  { label: "Rekomendasi Karir", icon: <Briefcase /> },
  { label: "Hubungkan ke Industri", icon: <Share2 /> },
  { label: "Jadwalkan Konsultasi", icon: <Calendar /> },
];

function Sidebar({ activePage, setActivePage, setSidebarOpen }) {
  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md h-screen flex flex-col justify-between">
      <div>
        <div className="text-center mb-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="mt-2 font-semibold text-gray-800">Alexudin</h2>
          <p className="text-sm text-gray-600">alexudin@email.com</p>
        </div>
        <ul>
          {menu.map((item) => (
            <li
              key={item.label}
              onClick={() => setActivePage(item.label)}
              className={`flex items-center gap-3 p-2 my-1 rounded cursor-pointer ${
                activePage === item.label ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="flex items-center gap-2 text-red-500 hover:bg-red-100 p-2 rounded w-full">
          <LogOut /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
