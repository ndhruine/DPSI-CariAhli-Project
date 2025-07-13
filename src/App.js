// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PortfolioListPage from './pages/PortfolioListPage'; // Pastikan path ini benar
import PortfolioDetailPage from './pages/PortfolioDetailPage'; // Pastikan path ini benar

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/portofolio" element={<PortfolioListPage />} />
        <Route path="/portofolio/:id" element={<PortfolioDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;