import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import AppointmentPage from './components/AppointmentPage';
import AddsessionartsPage from './components/AddsessionartsPage';
import AddsessionfysioPage from './components/AddsessionfysioPage';
import CalenderPage from './components/CalenderPage';
import DocumentsPage from './components/DocumentsPage';
import PatientoverviewPage from './components/PatientoverviewPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAfspraakRow, setShowAfspraakRow] = useState(false);

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
          <Route
            path="/addsessionarts"
            element={
              <AddsessionartsPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
          <Route
            path="/addsessionfysio"
            element={
              <AddsessionfysioPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
           <Route
            path="/appointment"
            element={
              <AppointmentPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
          <Route
            path="/calender"
            element={
              <CalenderPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
          <Route
            path="/documents"
            element={
              <DocumentsPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
          <Route
            path="/patientoverview"
            element={
              <PatientoverviewPage
                onLogout={handleLogout}
                showAfspraakRow={showAfspraakRow}
                setShowAfspraakRow={setShowAfspraakRow}
              />
            }
          />
        </Routes>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;