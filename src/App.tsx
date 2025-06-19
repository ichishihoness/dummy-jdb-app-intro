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
  const [showLoginTour, setShowLoginTour] = useState(true);
  const [showDashboardTourOne, setShowDashboardTourOne] = useState(true);
  const [showDashboardTourTwo, setShowDashboardTourTwo] = useState(false);
  const [showDashboardTourThree, setShowDashboardTourThree] = useState(false);
  const [showAppointmentTour, setShowAppointmentTour] = useState(false);
  const [showCalenderTour, setShowCalenderTour] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
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
                  showAppointmentTour={showAppointmentTour}
                  setShowAppointmentTour={setShowAppointmentTour}
                  showDashboardTourTwo={showDashboardTourTwo}
                  setShowDashboardTourTwo={setShowDashboardTourTwo}
                />
              }
            />
            <Route
              path="/calender"
              element={
                <CalenderPage
                  onLogout={handleLogout}
                  showCalenderTour={showCalenderTour}
                  setShowCalenderTour={setShowCalenderTour}
                  setShowDashboardTourThree={setShowDashboardTourThree}
                  showDashboardTourThree={showDashboardTourThree}
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
                  showDashboardTourOne={showDashboardTourOne}
                  setshowDashboardTourOne={setShowDashboardTourOne}
                  showDashboardTourTwo={showDashboardTourTwo}
                  setshowDashboardTourTwo={setShowDashboardTourTwo}
                  showDashboardTourThree={showDashboardTourThree}
                  setshowDashboardTourThree={setShowDashboardTourThree}
                  showAppointmentTour={showAppointmentTour}
                  setShowAppointmentTour={setShowAppointmentTour}
                  showCalenderTour={showCalenderTour}
                  setShowCalenderTour={setShowCalenderTour}
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
        </>
      ) : (
        <LoginPage 
          onLogin={handleLogin} 
          showLoginTour={showLoginTour}
          setShowLoginTour={setShowLoginTour}
        />
      )}
    </Router>
  );
}

export default App;