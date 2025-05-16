import React from 'react';
import '../styling/DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Dashboard</button>
        <button className="sidebar-btn">Kalender</button>
        <button className="sidebar-btn">Documenten</button>
        <button className="sidebar-btn">Patiëntenoverzicht</button>
        <hr className="sidebar-divider-1" />
        <button className="sidebar-btn">Afspraak toevoegen</button>
        <button className="sidebar-btn">Sessie toevoegen arts</button>
        <button className="sidebar-btn">Sessie toevoegen fysiotherapeut</button>
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Instellingen</button>
        <button className="sidebar-btn">Uitloggen</button>
      </div>
      <div className="kalender volledige">Kalender volledige</div>
      <div className="kalender patiënten">Kalender patiënten</div>
      <div className="notities">Notities</div>
    </div>
  );
};

export default DashboardPage;