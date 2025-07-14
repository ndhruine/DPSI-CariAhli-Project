// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

// Ikon sederhana sebagai pengganti library
const DashboardIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const PortfolioIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>;
const ChevronLeftIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;


export default function Sidebar({ isOpen, toggleSidebar }) {
  const activeLinkClass = "bg-purple-100 text-purple-800";
  const inactiveLinkClass = "text-gray-600 hover:bg-gray-100";

   return (
    <div className={`bg-white border-r flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      {/* Header - PERBAIKI BAGIAN INI */}
      <div className="flex items-center justify-center border-b px-5 py-5"> {/* UBAH DI SINI */}
        <h1 className={`text-2xl font-bold text-purple-700 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          CARI AHLI
        </h1>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 pt-6">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => `flex items-center py-3 ${isOpen ? 'px-6' : 'justify-center'} ${isActive ? activeLinkClass : inactiveLinkClass}`}>
              <DashboardIcon />
              <span className={`ml-3 transition-opacity ${!isOpen && 'opacity-0 hidden'}`}>Dashboard Saya</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portofolio" className={({ isActive }) => `flex items-center py-3 ${isOpen ? 'px-6' : 'justify-center'} ${isActive ? activeLinkClass : inactiveLinkClass}`}>
              <PortfolioIcon />
              <span className={`ml-3 transition-opacity ${!isOpen && 'opacity-0 hidden'}`}>Portofolio</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Tombol Toggle */}
      <div className="p-4 border-t">
        <button onClick={toggleSidebar} className="w-full flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100">
          {isOpen ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </button>
      </div>
    </div>
  );
}