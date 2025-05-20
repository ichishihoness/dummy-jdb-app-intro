import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/CalenderPage.css';

interface CalenderPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalenderPage: React.FC<CalenderPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <hr className="sidebar-divider-2" />
        <button
          className="sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button className="sidebar-btn">Kalender</button>
        <button
          className="sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button
          className="sidebar-btn"
          onClick={() => navigate('/patientoverview')}
        >
          Patiëntenoverzicht
        </button>
        <hr className="sidebar-divider-1" />
        <button
          className="sidebar-btn"
          onClick={() => navigate('/appointment')}
        >
          Afspraak toevoegen
        </button>
        <button
          className="sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button
          className="sidebar-btn"
          onClick={() => navigate('/addsessionfysio')}
        >
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Instellingen</button>
        <button
          className="sidebar-btn"
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
      kalender
    </div>
    </div>
  );
};

export default CalenderPage;