import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionfysioPage.css';

interface AddsessionfysioPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddsessionfysioPage: React.FC<AddsessionfysioPageProps> = ({
  onLogout,
}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="addsessionfysio-sidebar-wrapper">
      <div className="addsessionfysio-sidebar">
        <hr className="addsessionfysio-sidebar-divider-2" />
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/dashboard')}>
          Dashboard
        </button>
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/calender')}>
          Kalender
        </button>
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="addsessionfysio-sidebar-divider-1" />
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/appointment')}>
          Afspraak toevoegen
        </button>
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="addsessionfysio-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="addsessionfysio-sidebar-divider-2" />
        <button className="addsessionfysio-sidebar-btn">Instellingen</button>
        <button className="addsessionfysio-sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
      <div className="addsessionfysio-content">
        <div className="addsessionfysio-header">
          <span>Sessie fysiotherapeut</span>
          <hr className="addsessionfysio-header-underline" />
        </div>
        <div className="patientgegevens-header">
          <span>Patiëntgegevens</span>
          <hr className="patientgegevens-underline" />
        </div>
        <div className="addsessionfysio-dropdown">
          <button
            className="addsessionfysio-dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <span className="addsessionfysio-dropdown-plus">+</span>
            <span className="addsessionfysio-dropdown-label">Selecteer patiënt</span>
            <span className="addsessionfysio-dropdown-arrow">&#9662;</span>
          </button>
          {dropdownOpen && (
            <div className="addsessionfysio-dropdown-menu">
              <button className="addsessionfysio-patient-dropdown-btn">
                <div className="addsessionfysio-patient-info">
                  <div className="addsessionfysio-patient-labels">
                    <span className="addsessionfysio-patient-label-title">Naam</span>
                    <span className="addsessionfysio-patient-label-value">Joep Doe</span>
                  </div>
                  <div className="addsessionfysio-patient-labels">
                    <span className="addsessionfysio-patient-label-title">Leeftijd</span>
                    <span className="addsessionfysio-patient-label-value">10 jaar</span>
                  </div>
                </div>
                <span className="addsessionfysio-patient-plus-btn">+</span>
              </button>
            </div>
          )}
        </div>
        <div className="addsessionfysio-sideblock-top">Scanner</div>
        <div className="addsessionfysio-sideblock-bottom">Notitie</div>
      </div>
    </div>
  );
};

export default AddsessionfysioPage;