import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AppointmentPage.css';

interface AppointmentPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppointmentPage: React.FC<AppointmentPageProps> = ({ onLogout, showAfspraakRow, setShowAfspraakRow, }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'Oplopend' | 'Aflopend'>('Oplopend');
  const [repeat, setRepeat] = useState('Wekelijks');
  const navigate = useNavigate();

  const handleSortClick = (order: 'Oplopend' | 'Aflopend') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-sidebar">
        <hr className="appointment-sidebar-divider-2" />
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/calender')}
        >
          Kalender
        </button>
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/documents')}
        >
          Documenten
        </button>
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/patientoverview')}
        >
          Patiëntenoverzicht
        </button>
        <hr className="appointment-sidebar-divider-1" />
        <button className="appointment-sidebar-btn">Afspraak toevoegen</button>
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/addsessionarts')}
        >
          Sessie toevoegen arts
        </button>
        <button
          className="appointment-sidebar-btn"
          onClick={() => navigate('/addsessionfysio')}
        >
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="appointment-sidebar-divider-2" />
        <button className="appointment-sidebar-btn">Instellingen</button>
        <button
          className="appointment-sidebar-btn"
          onClick={onLogout}
        >
          Uitloggen
        </button>
      </div>
      <div className="appointment-content">
        <div className="appointment-header">
          <span>Hallo, Dr. Johannes Doe</span>
          <hr className="dashboard-header-underline" />
        </div>
        <div className="dashboard-afsprakenlijst">
          <div className="afsprakenlijst-header">
            <span>Patiënten met een afspraak</span>
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
              <div onClick={() => handleSortClick('Oplopend')}>Oplopend</div>
              <div onClick={() => handleSortClick('Aflopend')}>Aflopend</div>
            </div>
          )}
          {showAfspraakRow && (
            <div className="dashboard-afspraak-row">
            <div className="dashboard-afspraak-side geplanned">
              <span className="dashboard-afspraak-label">Gepland</span>
              <span className="dashboard-afspraak-date">02/06/2021</span>
            </div>
            <div className="dashboard-afspraak-main">
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Naam</span>
                <span className="dashboard-afspraak-value">Joep Doe</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Leeftijd</span>
                <span className="dashboard-afspraak-value">10 jaar</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Diagnose</span>
                <span className="dashboard-afspraak-value">
                  JDM <span className="dashboard-afspraak-sub">(monocyclische)</span>
                </span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Medicatie</span>
                <span className="dashboard-afspraak-value">x medicijn</span>
              </div>
              <div className="dashboard-afspraak-col">
                <span className="dashboard-afspraak-title">Afspraken</span>
                <span className="dashboard-afspraak-value">4</span>
              </div>
            </div>
            <div className="dashboard-afspraak-side dots">
              <span className="dashboard-afspraak-dots">•••</span>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className="appointment-form-container">
        <div className="appointment-form">
          <div className="appointment-form-header">
            <span>Afspraak toevoegen</span>
            <hr className="appointment-form-underline" />
          </div>
          <div className="appointment-form-section">
            <label className="appointment-label">Titel afspraak</label>
            <input className="appointment-input" placeholder="Type je titel!" />
          </div>
          <div className="appointment-form-section">
            <label className="appointment-label">
              Herhaling <span className="appointment-optional">(optioneel)</span>
            </label>
            <div className="appointment-repeat-row">
              <button
                className={`repeat-btn${repeat === 'Wekelijks' ? ' selected' : ''}`}
                onClick={() => setRepeat('Wekelijks')}
              >
                Wekelijks
              </button>
              <button
                className={`repeat-btn${repeat === 'Maandelijks' ? ' selected' : ''}`}
                onClick={() => setRepeat('Maandelijks')}
              >
                Maandelijks
              </button>
              <button
                className={`repeat-btn${repeat === 'Jaarlijks' ? ' selected' : ''}`}
                onClick={() => setRepeat('Jaarlijks')}
              >
                Jaarlijks
              </button>
              <button
                className={`repeat-btn${repeat === 'Anders' ? ' selected' : ''}`}
                onClick={() => setRepeat('Anders')}
              >
                Anders, namelijk
              </button>
            </div>
          </div>
          <div className="appointment-form-section">
            <label className="appointment-label">Gegevens afspraak</label>
            <div className="appointment-steps">
              <div className="step-col">
                <div className="step-bullet active">1</div>
                <div className="step-line"></div>
                <div className="step-bullet active">2</div>
                <div className="step-line"></div>
                <div className="step-bullet current">3</div>
              </div>
              <div className="step-content-col">
                <div className="step-box">
                  <span className="step-title">Eerst kies je het type afspraak ...</span>
                  <div className="step-select-row">
                    <button className="step-plus">+</button>
                    <span className="step-placeholder">Selecteer het type</span>
                  </div>
                </div>
                <div className="step-box">
                  <span className="step-title">Voeg nu deelnemers toe ...</span>
                  <div className="step-select-row">
                    <button className="step-plus">+</button>
                    <span className="step-placeholder">Selecteer deelnemer(s)</span>
                  </div>
                </div>
                <div className="step-box step-box-current">
                  <span className="step-title">Tijdstip & dag</span>
                  <div className="step-timeinfo">
                    Dinsdag, 15 juni 2021<br />
                    09:30 - 10:30<br />
                    <span>Duurt: 1 uur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="appointment-form-actions">
            <button
              className="cancel-btn"
              onClick={() => navigate('/dashboard')}
            >
              Annuleer
            </button>
            <button
              className="save-btn"
              onClick={() => {
                setShowAfspraakRow(true);
                navigate('/dashboard');
              }}
            >
              Opslaan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;