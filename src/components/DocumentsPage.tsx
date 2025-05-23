import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/DocumentsPage.css';

interface DocumentsPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<'Naam' | 'Datum'>('Naam');
  const navigate = useNavigate();

    const handleSortClick = (order: 'Naam' | 'Datum') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

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
        <button
          className="sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button className="sidebar-btn">Documenten</button>
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
     <div className="dashboard-content">
        <div className="dashboard-header">
          <span>Documenten</span>
          <hr className="dashboard-header-underline" />
        </div>
        <div className="afsprakenlijst">
          <div className="afsprakenlijst-header">
            <span>Alle documenten</span>
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
              <div onClick={() => handleSortClick('Naam')}>Naam</div>
              <div onClick={() => handleSortClick('Datum')}>Datum</div>
            </div>
          )}
          
        </div>
        <div className="kalender volledige">Kalender volledige</div>
        <div className="planning">Planning</div>
      </div>
    </div>
  );
};

export default DocumentsPage;