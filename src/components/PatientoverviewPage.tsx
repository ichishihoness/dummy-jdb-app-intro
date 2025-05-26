import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/PatientoverviewPage.css';

interface PatientoverviewPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PatientoverviewPage: React.FC<PatientoverviewPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const navigate = useNavigate();

  return (
    <div className="patients-wrapper">
      <div className="patients-sidebar">
        <hr className="patients-sidebar-divider-2" />
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button className="patients-sidebar-btn">Patiëntenoverzicht</button>
        <hr className="patients-sidebar-divider-1" />
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/appointment')}
        >
          Afspraak toevoegen
        </button>
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button
          className="patients-sidebar-btn"
          onClick={() => navigate('/addsessionfysio')}
        >
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="patients-sidebar-divider-2" />
        <button className="patients-sidebar-btn">Instellingen</button>
        <button
          className="patients-sidebar-btn"
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
      overzicht
    </div>
    </div>
  );
};

export default PatientoverviewPage;