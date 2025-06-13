import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionartsPage.css';

interface AddsessionartsPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddsessionartsPage: React.FC<AddsessionartsPageProps> = ({
  onLogout,
}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="addsessionarts-sidebar-wrapper">
      <div className="addsessionarts-sidebar">
        <hr className="addsessionarts-sidebar-divider-2" />
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/dashboard')}>
          Dashboard
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/calender')}>
          Kalender
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="addsessionarts-sidebar-divider-1" />
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/appointment')}>
          Afspraak toevoegen
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="addsessionarts-sidebar-divider-2" />
        <button className="addsessionarts-sidebar-btn">Instellingen</button>
        <button className="addsessionarts-sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
      <div className="addsessionarts-content">
        <div className="addsessionarts-header">
          <span>Sessie</span>
          <hr className="addsessionarts-header-underline" />
        </div>
        <div className="patientgegevens-header">
          <span>Patiëntgegevens</span>
          <hr className="patientgegevens-underline" />
        </div>
        <div className="addsessionarts-dropdown">
          <button
            className="addsessionarts-dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <span className="addsessionarts-dropdown-plus">+</span>
            <span className="addsessionarts-dropdown-label">Selecteer patiënt</span>
            <span className="addsessionarts-dropdown-arrow">&#9662;</span>
          </button>
          {dropdownOpen && (
            <div className="addsessionarts-dropdown-menu">
              <button className="addsessionarts-patient-dropdown-btn">
                <div className="addsessionarts-patient-info">
                  <div className="addsessionarts-patient-labels">
                    <span className="addsessionarts-patient-label-title">Naam</span>
                    <span className="addsessionarts-patient-label-value">Joep Doe</span>
                  </div>
                  <div className="addsessionarts-patient-labels">
                    <span className="addsessionarts-patient-label-title">Leeftijd</span>
                    <span className="addsessionarts-patient-label-value">10 jaar</span>
                  </div>
                </div>
                <span className="addsessionarts-patient-plus-btn">+</span>
              </button>
            </div>
          )}
        </div>
        <div className="addsessionarts-sideblock-top">Scanner</div>
        <div className="addsessionarts-sideblock-bottom">Notitie</div>
      </div>
    </div>
  );
};

export default AddsessionartsPage;