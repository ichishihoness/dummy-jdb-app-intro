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
    <div className="addesessionfysio-wrapper">
      <div className="addesessionfysio-sidebar">
        <hr className="addesessionfysio-sidebar-divider-2" />
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/patientoverview')}
        >
          Patiëntenoverzicht
        </button>
        <hr className="addesessionfysio-sidebar-divider-1" />
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/appointment')}
        >
          Afspraak toevoegen
        </button>
        <button
          className="addesessionfysio-sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button className="addesessionfysio-sidebar-btn">Sessie toevoegen fysiotherapeut</button>
        <hr className="addesessionfysio-sidebar-divider-2" />
        <button className="addesessionfysio-sidebar-btn">Instellingen</button>
        <button
          className="addesessionfysio-sidebar-btn"
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