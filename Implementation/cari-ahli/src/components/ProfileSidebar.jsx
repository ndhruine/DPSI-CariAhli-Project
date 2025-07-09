import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-gray-500 mb-2" />
          <h2 className="text-xl font-bold">Alexudin</h2>
          <p className="text-sm text-gray-500">alexudin@email.com</p>
        </div>

        <hr className="my-4" />

        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            className="flex items-center justify-center w-full text-red-600 font-semibold hover:text-red-800"
            onClick={() => {
              alert("Logout berhasil");
              navigate("/");
              onClose();
            }}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
