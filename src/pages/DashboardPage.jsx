// src/pages/DashboardPage.jsx
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import FeedbackForm from '../components/FeedbackForm';
import MonitoringBox from '../components/MonitoringBox';
import PortfolioTable from '../components/PortfolioTable';
import { portfolioStatus } from '../data/MockData.js';

export default function DashboardPage() {
  const [monitoredStudent, setMonitoredStudent] = useState({
    name: 'Sinta',
    progress: {
      skill: 80,
      pengetahuan: 60,
      pengalaman: 50,
    },
  });

  const handleSaveFeedback = (newScores) => {
    setMonitoredStudent(prev => ({
      ...prev,
      progress: {
        skill: newScores.skill * 10,
        pengetahuan: newScores.pengetahuan * 10,
        pengalaman: newScores.pengalaman * 10,
      }
    }));
  };
  
  return (
    <MainLayout pageTitle="Dashboard">
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Status Portofolio Mahasiswa</h2>
                <PortfolioTable data={portfolioStatus} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FeedbackForm onSave={handleSaveFeedback} />
                <MonitoringBox student={monitoredStudent} />
            </div>
        </div>
    </MainLayout>
  );
}