import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/PatientoverviewPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface PatientoverviewPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
  tour: boolean;
  setTour: React.Dispatch<React.SetStateAction<boolean>>;
  showPatientsTour: boolean;
  setShowPatientsTour: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourThree: boolean;
}

const PatientoverviewPage: React.FC<PatientoverviewPageProps> = ({ onLogout, tour, setTour, showPatientsTour, setShowPatientsTour, showDashboardTourThree}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<'Naam' | 'Geboorte datum' | 'Diagnose' | 'Afspraken'>('Naam');
  const navigate = useNavigate();

    const handleSortClick = (order: 'Naam' | 'Geboorte datum' | 'Diagnose' | 'Afspraken') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

     useEffect(() => {
    if (showPatientsTour) {
      const tour = introJs()
        .setOptions({
          exitOnOverlayClick: false,
          showBullets: false,
          skipLabel: '',
          steps: [
            {
                    element: document.querySelector('.patient-main-block') as HTMLElement,
                    title: 'Patiëntenoverzicht',
                    intro: 'Hier is de lijst met alle jou patiënten. Nieuwe patiënten worden automatich aan de lijst toegevoegd.',
                    position: 'top'
                  },
                  {
                    element: document.querySelector('.dropdown-btn') as HTMLElement,
                    title: 'Patiëntenoverzicht',
                    intro: 'Met deze knop kun de volgorde waarin patiënten zijn opgesteld aanpassen',
                    position: 'left'
                  },
                  {
                    element: document.querySelector('.patient-row') as HTMLElement,
                    title: 'Patiëntenoverzicht',
                    intro: 'In de lijst zelf is de naam, geboorte datum, diagnose en het aantal afspraken te zien.',
                    position: 'bottom'
                  },
                  {
                    element: document.querySelector('.patient-data-side dots') as HTMLElement,
                    title: 'Patiëntenoverzicht',
                    intro: 'Met deze knop krijg je meer informatie te zien over de desbetreffende patiënt.',
                    position: 'left'
                  }
          ]
        })
        .oncomplete(() => {
                setShowPatientsTour(false);
              })
              .onexit(() => {
                setShowPatientsTour(false);
              })
                  tour.start();
        }
      }, [showPatientsTour, setShowPatientsTour]);

  return (
    <div className="patient-wrapper">
      <div className="patient-sidebar">
        <hr className="patient-sidebar-divider-2" />
        <button
  className="patient-sidebar-btn dashboard-btn"
  onClick={() => {
    if (tour === false || showDashboardTourThree === true) {
      navigate('/dashboard');
    }
  }}
>
  Dashboard
</button>
  <button
    className="patient-sidebar-btn kalender-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/calender');
      }
    }}
  >
    Kalender
  </button>
  <button
    className="patient-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/documents');
      }
    }}
  >
    Documenten
  </button>
  <button
    className="patient-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/patientoverview');
      }
    }}
  >
    Patiëntenoverzicht
  </button>
  <hr className="patient-sidebar-divider-1" />
  <button
    className="patient-sidebar-btn afspraak-toevoegen-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/appointment');
      }
    }}
  >
    Afspraak toevoegen
  </button>
  <button
    className="patient-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/addsessionarts');
      }
    }}
  >
    Sessie toevoegen arts
  </button>
  <button
    className="addsessionarts-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/addsessionfysio');
      }
    }}
  >
    Sessie toevoegen fysiotherapeut
  </button>
  <hr className="addsessionarts-sidebar-divider-2" />
  <button className="addsessionarts-sidebar-btn">Instellingen</button>
  <button
    className="addsessionarts-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        onLogout();
      }
    }}
  >
    Uitloggen
  </button>
</div>
      <div className="patient-content">
            <div className="patient-header">
              <span>Patiëntenoverzicht</span>
              <hr className="patient-header-underline" />
                <div className="patient-main-block">
             <div className="patienten-header">
            <span>Alle patiënten</span>
            <hr className="patienten-underline" />
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
              <div onClick={() => handleSortClick('Geboorte datum')}>Geboorte datum</div>
              <div onClick={() => handleSortClick('Diagnose')}>Diagnose</div>
              <div onClick={() => handleSortClick('Afspraken')}>Afspraken</div>
            </div>
          )}
            <div className="patient-row">
  <div className="patient-cell">naam</div>
  <div className="patient-cell">geboorte datum</div>
  <div className="patient-cell">diagnose</div>
  <div className="patient-cell">afspraken</div>
</div>
<div className="patient-data-row">
  <div className="patient-data-main">
    <div className="patient-data-cell patient-data-cell--naam">
      <span className="patient-data-bold">Joep Doe</span>
    </div>
    <div className="patient-data-cell patient-data-cell--geboortedatum">
      <span className="patient-data-bold">11/02/2008</span>
    </div>
    <div className="patient-data-cell patient-data-cell--diagnose">
      <span className="patient-data-bold">JDM, monocyclische</span>
    </div>
    <div className="patient-data-cell patient-data-cell--afspraken">
      <span className="patient-data-bold">2</span>
    </div>
  </div>
  <div className="patient-data-side dots">
    <span className="patient-data-dots">•••</span>
  </div>
</div>
              
            </div>
            <div className="kalender volledige">kalender volledig</div>
          <div className="kalender patiënten">kalender patienten</div>
          <div className="notities">notities</div>
          </div>
        </div>
        </div>
      );
    };
export default PatientoverviewPage;