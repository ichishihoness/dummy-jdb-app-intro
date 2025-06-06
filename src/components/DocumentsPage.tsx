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
    const [sortOrder, setSortOrder] = useState<'Naam' | 'Type' | 'Datum'>('Naam');
  const navigate = useNavigate();

    const handleSortClick = (order: 'Naam' | 'Type' | 'Datum') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  return (
    <div className="documents-sidebar-wrapper">
          <div className="documents-sidebar">
            <hr className="documents-sidebar-divider-2" />
            <button className="documents-sidebar-btn" onClick={() => navigate('/dashboard')}>
              Dashboard
            </button>
            <button className="documents-sidebar-btn" onClick={() => navigate('/calender')}>
              Kalender
            </button>
            <button className="documents-sidebar-btn" >Documenten</button>
            <button className="documents-sidebar-btn" onClick={() => navigate('/patientoverview')}>
              Patiëntenoverzicht
            </button>
            <hr className="documents-sidebar-divider-1" />
            <button className="documents-sidebar-btn" onClick={() => navigate('/appointment')}>
              Afspraak toevoegen
            </button>
            <button className="documents-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
              Sessie toevoegen arts
            </button>
            <button className="documents-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
              Sessie toevoegen fysiotherapeut
            </button>
            <hr className="documents-sidebar-divider-2" />
            <button className="documents-sidebar-btn">Instellingen</button>
            <button className="documents-sidebar-btn" onClick={onLogout}>
              Uitloggen
            </button>
          </div>
          <div className="documents-content">
            <div className="documents-header">
              <span>Documenten</span>
              <hr className="documents-header-underline" />
                <div className="documents-main-block">
             <div className="documenten-header">
            <span>Alle documenten</span>
            <hr className="documenten-underline" />
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
              <div onClick={() => handleSortClick('Type')}>Type</div>
              <div onClick={() => handleSortClick('Datum')}>Datum</div>
            </div>
          )}
            <div className="documents-row">
  <div className="documents-cell">naam</div>
  <div className="documents-cell">type</div>
  <div className="documents-cell">datum</div>
</div>
<div className="documents-data-row">
  <div className="documents-data-cell documents-data-cell--naam">
    <span className="documents-data-bold">RD_docpatient0024</span>
  </div>
  <div className="documents-data-cell documents-data-cell--type">
    <span className="documents-data-bold">Document - PDF</span>
  </div>
  <div className="documents-data-cell documents-data-cell--datum">
    <span className="documents-data-bold">20/05/2021, 14:35</span>
  </div>
  <div className="documents-data-actions">
    <button className="documents-action-btn">
      <span role="img" aria-label="Bekijken">🔍</span>
    </button>
    <button className="documents-action-btn">
      <span role="img" aria-label="Verwijderen">🗑️</span>
    </button>
    <button className="documents-action-btn documents-action-btn--download">
      <span role="img" aria-label="Downloaden">⬇️</span>
    </button>
  </div>
</div>
              
            </div>
            <div className="documents-sideblock-top">Kalenderblok</div>
    <div className="documents-sideblock-bottom">Planning</div>
          </div>
        </div>
        </div>
      );
    };
export default DocumentsPage;