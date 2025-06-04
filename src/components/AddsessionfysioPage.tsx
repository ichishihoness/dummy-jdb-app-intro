import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionfysioPage.css';

interface AddsessionfysioPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddsessionfysioPage: React.FC<AddsessionfysioPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const navigate = useNavigate();

  return (
    <div className="addsessionfysio-wrapper">
      <div className="addsessionfysio-sidebar">
        <hr className="addsessionfysio-sidebar-divider-2" />
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/patientoverview')}
        >
          Patiëntenoverzicht
        </button>
        <hr className="addsessionfysio-sidebar-divider-1" />
        <button 
          className="addsessionfysio-sidebar-btn" 
          onClick={() => navigate('/appointment')}
        >
          Afspraak toevoegen
        </button>
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button
          className="addsessionfysio-sidebar-btn"
          onClick={() => navigate('/addsessionfysio')}
        >
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="addsessionfysio-sidebar-divider-2" />
        <button className="addsessionfysio-sidebar-btn">Instellingen</button>
        <button
          className="addsessionfysio-sidebar-btn"
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
      fysio
    </div>
    </div>
  );
};

export default AddsessionfysioPage;