import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionfysioPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface AddsessionfysioPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
  tour: boolean;
  setTour: React.Dispatch<React.SetStateAction<boolean>>;
  showSessionfTour: boolean;
  setShowSessionfTour: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourThree: boolean;
}

const AddsessionfysioPage: React.FC<AddsessionfysioPageProps> = ({
  onLogout,
  tour,
  setTour,
  showSessionfTour,
  setShowSessionfTour,
  showDashboardTourThree
}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showDashboardIndicator, setShowDashboardIndicator] = useState(false);

     useEffect(() => {
    if (showSessionfTour) {
      introJs()
        .setOptions({
          exitOnOverlayClick: false,
          showBullets: false,
          nextLabel: 'Volgende',
          prevLabel: 'Terug',
          doneLabel: 'Volgende',
          skipLabel: '',
          steps: [
            {
              element: document.querySelector('.addsessionfysio-dropdown-btn') as HTMLElement,
              title: 'Sessie toevoegen fysio',
              intro: 'Klik hier om de lijst met patiënten te openen.',
              position: 'right',
            }
          ],
        })
        .oncomplete(() => {
          setDropdownOpen(true);
          setTimeout(() => {
            const dropdownMenu = document.querySelector('.addsessionfysio-dropdown-menu') as HTMLElement | null;
            if (dropdownMenu) {
              introJs()
                .setOptions({
                  exitOnOverlayClick: false,
                  showBullets: false,
                  nextLabel: 'Volgende',
                  prevLabel: 'Terug',
                  doneLabel: 'Volgende',
                  skipLabel: '',
                  steps: [
                    {
                      element: dropdownMenu,
                      title: 'Sessie toevoegen fysio',
                      intro: 'Selecteer eerst de patiënt waar je een sessie van toe wilt toevoegen.',
                      position: 'right',
                      disableInteraction: true
                    },
                  ],
                })
                .oncomplete(() => {
                  setShowSessionfTour(false);
                })
                .onexit(() => {
                  setShowSessionfTour(false);
                })
                .start();
            }
          }, 200); 
        })
        .onexit(() => {
          setShowSessionfTour(false);
        })
        .start();
    }
  }, [showSessionfTour, setShowSessionfTour]);

  useEffect(() => {
    if (showResults) {
      const waitForHeader = () => {
        const header = document.querySelector('.fysio-results-block') as HTMLElement | null;
        if (header) {
          introJs()
            .setOptions({
              exitOnOverlayClick: false,
              showBullets: false,
              nextLabel: 'Volgende',
              prevLabel: 'Terug',
              doneLabel: 'Ik begrijp het',
              skipLabel: '',
              steps: [
                {
                  element: header,
                  title: 'Sessie toevoegen fysio',
                  intro: 'In de lijst die verschijnt vind je alle uitlsagen van de patiënt en kun je onderin een sessie toevoegen.',
                  position: 'top',
                },
              ],
              })
          .oncomplete(() => {
            setShowDashboardIndicator(true); 
            })
            .start();
        } else {
          setTimeout(waitForHeader, 100);
        }
      };
      waitForHeader();
    }
  }, [showResults]);


  return (
    <div className="addsessionfysio-sidebar-wrapper">
      <div className="addsessionfysio-sidebar">
        <hr className="addsessionfysio-sidebar-divider-2" />
        <button
  className={`addsessionarts-sidebar-btn dashboard-btn${showDashboardIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showDashboardTourThree === true) {
      setShowDashboardIndicator(false);
      navigate('/dashboard');
    }
  }}
>
  Dashboard
</button>
  <button
    className="addsessionfysio-sidebar-btn kalender-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/calender');
      }
    }}
  >
    Kalender
  </button>
  <button
    className="addsessionfysio-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/documents');
      }
    }}
  >
    Documenten
  </button>
  <button
    className="addsessionfysio-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/patientoverview');
      }
    }}
  >
    Patiëntenoverzicht
  </button>
  <hr className="addsessionfysio-sidebar-divider-1" />
  <button
    className="addsessionfysio-sidebar-btn afspraak-toevoegen-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/appointment');
      }
    }}
  >
    Afspraak toevoegen
  </button>
  <button
    className="addsessionfysio-sidebar-btn"
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
      <div className="addsessionfysio-content">
        <div className="addsessionfysio-header">
          <span>Sessie fysiotherapeut</span>
          <hr className="addsessionfysio-header-underline" />
        </div>
        <div className="patientgegevens-header">
          <span>Patiëntgegevens</span>
          <hr className="patientgegevens-underline" />
        </div>
        <div className="addsessionfysio-dropdown">
          <button
            className="addsessionfysio-dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <span className="addsessionfysio-dropdown-plus">+</span>
            <span className="addsessionfysio-dropdown-label">Selecteer patiënt</span>
            <span className="addsessionfysio-dropdown-arrow">&#9662;</span>
          </button>
          {dropdownOpen && !showResults && (
            <div className="addsessionfysio-dropdown-menu">
              <button
                className="addsessionfysio-patient-dropdown-btn"
                onClick={() => {
                  setShowResults(true);
                  setDropdownOpen(false);
                }}
              >
                <div className="addsessionfysio-patient-info">
                  <div className="addsessionfysio-patient-labels">
                    <span className="addsessionfysio-patient-label-title">Naam</span>
                    <span className="addsessionfysio-patient-label-value">Joep Doe</span>
                  </div>
                  <div className="addsessionfysio-patient-labels">
                    <span className="addsessionfysio-patient-label-title">Leeftijd</span>
                    <span className="addsessionfysio-patient-label-value">10 jaar</span>
                  </div>
                </div>
                <span className="addsessionfysio-patient-plus-btn">+</span>
              </button>
            </div>
          )}
        </div>
        {showResults && (
          <>
            <div className="fysio-results-header">
              <span>Resultaten scan</span>
              <hr className="fysio-results-header-underline" />
            </div>
            <div className="fysio-results-block">
              <div className="fysio-results-main">
                <div className="fysio-section">
                  <span className="fysio-section-title">Myometrie uitslagen</span>
                  <hr className="fysio-section-underline" />
                  <div className="fysio-table-header">
                    <span>aspect</span>
                    <span>mini titel</span>
                    <span>mini titel</span>
                    <span>mini titel</span>
                  </div>
                  <div className="fysio-table-row fysio-table-row--bg">
                    <button className="fysio-table-btn">Links</button>
                    <button className="fysio-table-btn fysio-table-btn--active">Schouder</button>
                    <span className="fysio-table-value fysio-table-value--bold">35/50</span>
                    <span className="fysio-table-value">32/50</span>
                    <button className="fysio-table-search">
                      <span role="img" aria-label="zoeken">🔍</span>
                    </button>
                  </div>
                  <div className="fysio-table-header">
                    <span>score</span>
                    <span>mini titel</span>
                    <span>mini titel</span>
                    <span>mini titel</span>
                  </div>
                  <div className="fysio-table-row fysio-table-row--score">
                    <span className="fysio-score fysio-score--orange">39/50</span>
                    <button className="fysio-table-btn fysio-table-btn--white">
                      14/06/2021 <span role="img" aria-label="calendar">📅</span>
                    </button>
                    <button className="fysio-table-btn fysio-table-btn--white">14:35 <span role="img" aria-label="clock">⏰</span></button>
                    <button className="fysio-table-btn fysio-table-btn--white">01:00 <span role="img" aria-label="clock">⏰</span></button>
                    <button className="fysio-table-search">
                      <span role="img" aria-label="zoeken">🔍</span>
                    </button>
                  </div>
                </div>
                <div className="fysio-section" style={{marginTop: '32px'}}>
                  <span className="fysio-section-title">oefeningen uitgevoerd</span>
                  <hr className="fysio-section-underline" />
                  <button className="fysio-oefening-btn"><span>+ Oefening</span></button>
                  <div className="fysio-oefeningen-table">
                    {[1,2,3].map((row) => (
                      <div className="fysio-oefeningen-row" key={row}>
                        <button className="fysio-oefening-cell">Oefening 1</button>
                        <span className="fysio-oefening-cell fysio-oefening-cell--iteraties">Iteraties: <b>3x</b></span>
                        <button className="fysio-oefening-cell">Oefening 1</button>
                        <span className="fysio-oefening-cell fysio-oefening-cell--iteraties">Iteraties: <b>3x</b></span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fysio-results-actions">
                  <button className="fysio-results-btn fysio-results-btn--outline">annuleer</button>
                  <button className="fysio-results-btn fysio-results-btn--filled">sessie toevoegen</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="addsessionfysio-sideblock-top">Scanner</div>
      <div className="addsessionfysio-sideblock-bottom">Notitie</div>
    </div>
  );
};

export default AddsessionfysioPage;