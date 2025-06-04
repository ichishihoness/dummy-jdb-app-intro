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
    <div className="documents-wrapper">
      <div className="dashboard-sidebar">
        <hr className="dashboard-sidebar-divider-2" />
        <button className="calender-sidebar-btn">Dashboard</button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/calender')}>
          Kalender
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="dashboard-sidebar-divider-1" />
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/appointment')}>
            Afspraak toevoegen
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="dashboard-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="dashboard-sidebar-divider-2" />
        <button className="dashboard-sidebar-btn">Instellingen</button>
        <button className="dashboard-sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
    </div>
  );
};

export default DocumentsPage;