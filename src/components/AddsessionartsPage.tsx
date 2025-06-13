import React from 'react';
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
  <button className="addsessionarts-dropdown-btn">
    <span className="addsessionarts-dropdown-plus">+</span>
    <span className="addsessionarts-dropdown-label">Selecteer patiënt</span>
    <span className="addsessionarts-dropdown-arrow">&#9662;</span>
  </button>
        </div>
        <div className="addsessionarts-sideblock-top">Scanner</div>
<div className="addsessionarts-sideblock-bottom">Notitie</div>
      </div>
      </div>
  );
};

export default AddsessionartsPage;