import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/DashboardPage.css';

interface DashboardPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'Oplopend' | 'Aflopend'>('Oplopend');
  const navigate = useNavigate();

  const handleSortClick = (order: 'Oplopend' | 'Aflopend') => {
    setSortOrder(order);
    setDropdownOpen(false);
    setShowAfspraakRow(true);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <hr className="dashboard-sidebar-divider-2" />
        <button className="calender-sidebar-btn">Dashboard</button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/calender')}>
          Kalender
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="dashboard-sidebar-divider-1" />
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/appointment')}>
            Afspraak toevoegen
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="dashboard-sidebar-divider-2" />
        <button className="dashboard-sidebar-btn">Instellingen</button>
        <button className="dashboard-sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <span>Hallo, Dr. Johannes Doe</span>
          <hr className="dashboard-header-underline" />
        </div>
        <div className="dashboard-afsprakenlijst">
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
          {showAfspraakRow && (
            <div className="dashboard-afspraak-row">
            <div className="dashboard-afspraak-side geplanned">
              <span className="dashboard-afspraak-label">Gepland</span>
              <span className="dashboard-afspraak-date">02/06/2021</span>
            </div>
            <div className="dashboard-afspraak-main">
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Naam</span>
                <span className="dashboard-afspraak-value">Joep Doe</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Leeftijd</span>
                <span className="dashboard-afspraak-value">10 jaar</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Diagnose</span>
                <span className="dashboard-afspraak-value">
                  JDM <span className="dashboard-afspraak-sub">(monocyclische)</span>
                </span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Medicatie</span>
                <span className="dashboard-afspraak-value">x medicijn</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Afspraken</span>
                <span className="dashboard-afspraak-value">4</span>
              </div>
            </div>
            <div className="dashboard-afspraak-side dots">
              <span className="dashboard-afspraak-dots">•••</span>
            </div>
          </div>
          )}
          <div className="kalender volledige">kalender volledig</div>
          <div className="kalender patiënten">kalender patienten</div>
          <div className="notities">notities</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;