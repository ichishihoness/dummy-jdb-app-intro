import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/DashboardPage.css';

interface DashboardPageProps {
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'Oplopend' | 'Aflopend'>('Oplopend');
  const navigate = useNavigate();

  const handleSortClick = (order: 'Oplopend' | 'Aflopend') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Dashboard</button>
        <button className="sidebar-btn">Kalender</button>
        <button className="sidebar-btn">Documenten</button>
        <button className="sidebar-btn">Patiëntenoverzicht</button>
        <hr className="sidebar-divider-1" />
        <button
          className="sidebar-btn"
          onClick={() => navigate('/afspraak')}
        >
          Afspraak toevoegen
        </button>
        <button className="sidebar-btn">Sessie toevoegen arts</button>
        <button className="sidebar-btn">Sessie toevoegen fysiotherapeut</button>
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Instellingen</button>
        <button
          className="sidebar-btn"
          onClick={onLogout}
        >
          Uitloggen
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <span>Hallo, Dr. Johannes Doe</span>
          <hr className="dashboard-header-underline" />
        </div>
        <div className="afsprakenlijst">
          <div className="afsprakenlijst-header">
            <span>Patiënten met een afspraak</span>
            <hr className="afsprakenlijst-underline" />
          </div>
          <button
            className="dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {sortOrder} <span className="dropdown-arrow">▼</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div onClick={() => handleSortClick('Oplopend')}>Oplopend</div>
              <div onClick={() => handleSortClick('Aflopend')}>Aflopend</div>
            </div>
          )}
          <div className="afspraak-row">
            <div className="afspraak-side geplanned">
              <span className="afspraak-label">Gepland</span>
              <span className="afspraak-date">02/06/2021</span>
            </div>
            <div className="afspraak-main">
              <div className="afspraak-col">
                <span className="afspraak-title">Naam</span>
                <span className="afspraak-value">Joep Doe</span>
              </div>
              <div className="afspraak-col">
                <span className="afspraak-title">Leeftijd</span>
                <span className="afspraak-value">10 jaar</span>
              </div>
              <div className="afspraak-col">
                <span className="afspraak-title">Diagnose</span>
                <span className="afspraak-value">
                  JDM <span className="afspraak-sub">(monocyclische)</span>
                </span>
              </div>
              <div className="afspraak-col">
                <span className="afspraak-title">Medicatie</span>
                <span className="afspraak-value">x medicijn</span>
              </div>
              <div className="afspraak-col">
                <span className="afspraak-title">Afspraken</span>
                <span className="afspraak-value">4</span>
              </div>
            </div>
            <div className="afspraak-side dots">
              <span className="afspraak-dots">•••</span>
            </div>
          </div>
        </div>
      </div>
      <div className="kalender volledige">Kalender volledige</div>
      <div className="kalender patiënten">Kalender patiënten</div>
      <div className="notities">Notities</div>
    </div>
  );
};

export default DashboardPage;