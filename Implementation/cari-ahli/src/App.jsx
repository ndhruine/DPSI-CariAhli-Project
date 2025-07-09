import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import DataMahasiswa from "./pages/DataMahasiswa";
import FeedbackIndustri from "./pages/FeedbackIndustri";
import RekomendasiKarir from "./pages/RekomendasiKarir";
import HubungkanIndustri from "./pages/HubungkanIndustri";
import JadwalKonsultasi from "./pages/JadwalKonsultasi";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Data Mahasiswa":
        return <DataMahasiswa />;
      case "Feedback Industri":
        return <FeedbackIndustri />;
      case "Rekomendasi Karir":
        return <RekomendasiKarir />;
      case "Hubungkan ke Industri":
        return <HubungkanIndustri />;
      case "Jadwalkan Konsultasi":
        return <JadwalKonsultasi />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {isSidebarOpen && (
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <div className="flex-1 flex flex-col">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="p-6">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
