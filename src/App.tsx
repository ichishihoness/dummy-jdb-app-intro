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

  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/afspraak" element={<AppointmentPage />} />
        </Routes>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;