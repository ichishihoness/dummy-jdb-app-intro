import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionartsPage.css';

interface AddsessionartsPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddsessionartsPage: React.FC<AddsessionartsPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const navigate = useNavigate();

  return (
    <div className="addsessionarts-wrapper">
      <div className="addsessionarts-sidebar">
        <hr className="addsessionarts-sidebar-divider-2" />
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/patientoverview')}
        >
          Patiëntenoverzicht
        </button>
        <hr className="addsessionarts-sidebar-divider-1" />
        <button 
          className="addsessionarts-sidebar-btn" 
          onClick={() => navigate('/appointment')}
        >
          Afspraak toevoegen
        </button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={() => navigate('/addsessionfysio')}
        >
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="addsessionarts-sidebar-divider-2" />
        <button className="addsessionarts-sidebar-btn">Instellingen</button>
        <button
          className="addsessionarts-sidebar-btn"
          onClick={onLogout}
        >
          Uitloggen
        </button>
      </div>
      <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}
    >
      arts
    </div>
    </div>
  );
};

export default AddsessionartsPage;