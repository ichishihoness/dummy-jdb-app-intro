import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import AppointmentPage from './components/AppointmentPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/dashboard" element={<DashboardPage onLogout={handleLogout} />} />
          <Route path="/afspraak" element={<AppointmentPage onLogout={handleLogout} />} />
        </Routes>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;