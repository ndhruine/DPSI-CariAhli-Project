import React, { useState } from 'react';
import LandingPage from './LandingPage';
import TentangKami from './TentangKami';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import ResetPasswordPage from './ResetPasswordPage';
import HomePage from './HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  // Simple routing function
  const renderPage = () => {
    switch(currentPage) {
      case 'tentang':
        return <TentangKami onNavigate={setCurrentPage} />;
      case 'register':
        return <RegisterPage onNavigate={setCurrentPage} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'forgot-password':
        return <ForgotPasswordPage onNavigate={setCurrentPage} />;
      case 'reset-password':
        return <ResetPasswordPage onNavigate={setCurrentPage} />;
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return renderPage();
}

export default App;
