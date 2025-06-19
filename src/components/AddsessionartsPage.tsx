import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/AddsessionartsPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface AddsessionartsPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
  showSessionaTour: boolean;
  setShowSessionaTour: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddsessionartsPage: React.FC<AddsessionartsPageProps> = ({
  onLogout,
  showSessionaTour,
  setShowSessionaTour
}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Start de eerste stap van de tour als showSessionaTour true is
  useEffect(() => {
    if (showSessionaTour) {
      const intro = introJs();
      intro.setOptions({
        exitOnOverlayClick: false,
        showBullets: false,
        skipLabel: '',
        steps: [
          {
            element: document.querySelector('.addsessionarts-dropdown-btn') as HTMLElement,
            title: 'Sessie toevoegen arts',
            intro: 'Klik hier om de lijst met patiënten te openen.',
            position: 'right',
          }
        ],
      })
      .oncomplete(() => {
        setDropdownOpen(true);
      })
      .onexit(() => {
        setShowSessionaTour(false);
      })
      .start();
    }
  }, [showSessionaTour, setShowSessionaTour]);

  // Start de tweede stap van de tour als showResults true wordt
  useEffect(() => {
    if (showResults && showSessionaTour) {
      // Wacht tot het resultatenblok in de DOM staat
      const waitForResultsBlock = () => {
        const resultsBlock = document.querySelector('.addsessionarts-results-block') as HTMLElement | null;
        if (resultsBlock) {
          introJs()
            .setOptions({
              exitOnOverlayClick: false,
              showBullets: false,
              skipLabel: '',
              steps: [
                {
                  element: resultsBlock,
                  title: 'Resultaten',
                  intro: 'Hier zie je de resultaten van de geselecteerde patiënt.',
                  position: 'right',
                },
              ],
            })
            .oncomplete(() => {
              setShowSessionaTour(false);
            })
            .onexit(() => {
              setShowSessionaTour(false);
            })
            .start();
        } else {
          setTimeout(waitForResultsBlock, 100);
        }
      };
      waitForResultsBlock();
    }
  }, [showResults, showSessionaTour, setShowSessionaTour]);

  return (
    <div className="addsessionarts-sidebar-wrapper">
      <div className="addsessionarts-sidebar">
        <hr className="addsessionarts-sidebar-divider-2" />
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/dashboard')}>
          Dashboard
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/calender')}>
          Kalender
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="addsessionarts-sidebar-divider-1" />
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/appointment')}>
          Afspraak toevoegen
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="addsessionarts-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="addsessionarts-sidebar-divider-2" />
        <button className="addsessionarts-sidebar-btn">Instellingen</button>
        <button className="addsessionarts-sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
      <div className="addsessionarts-content">
        <div className="addsessionarts-header">
          <span>Sessie arts</span>
          <hr className="addsessionarts-header-underline" />
        </div>
        <div className="patientgegevens-header">
          <span>Patiëntgegevens</span>
          <hr className="patientgegevens-underline" />
        </div>
        <div className="addsessionarts-dropdown">
          <button
            className="addsessionarts-dropdown-btn"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            <span className="addsessionarts-dropdown-plus">+</span>
            <span className="addsessionarts-dropdown-label">Selecteer patiënt</span>
            <span className="addsessionarts-dropdown-arrow">&#9662;</span>
          </button>
          {dropdownOpen && !showResults && (
            <div className="addsessionarts-dropdown-menu">
              <button
                className="addsessionarts-patient-dropdown-btn"
                onClick={() => {
                  setShowResults(true);
                  setDropdownOpen(false);
                }}
              >
                <div className="addsessionarts-patient-info">
                  <div className="addsessionarts-patient-labels">
                    <span className="addsessionarts-patient-label-title">Naam</span>
                    <span className="addsessionarts-patient-label-value">Joep Doe</span>
                  </div>
                  <div className="addsessionarts-patient-labels">
                    <span className="addsessionarts-patient-label-title">Leeftijd</span>
                    <span className="addsessionarts-patient-label-value">10 jaar</span>
                  </div>
                </div>
                <span className="addsessionarts-patient-plus-btn">+</span>
              </button>
            </div>
          )}
        </div>
        {showResults && (
          <>
            <div className="addsessionarts-results-header">
              <span>Resultaten scan</span>
              <hr className="addsessionarts-results-header-underline" />
            </div>
            <div className="addsessionarts-results-block">
              <div className="addsessionarts-results-main">
                <div className="addsessionarts-results-section">
                  <span className="addsessionarts-results-section-title">Radiologie uitslagen</span>
                  <hr className="addsessionarts-results-section-underline" />
                  <div className="addsessionarts-results-table-header">
                    <span>aspect</span>
                    <span>type</span>
                    <span>beoordeling</span>
                  </div>
                  <div className="addsessionarts-results-table-row">
                    <button className="addsessionarts-results-table-btn">Links</button>
                    <button className="addsessionarts-results-table-btn addsessionarts-results-table-btn--active">Schouder</button>
                    <input className="addsessionarts-results-table-input" placeholder="Type iets ..." />
                    <button className="addsessionarts-results-table-search">
                      <span role="img" aria-label="zoeken">🔍</span>
                    </button>
                  </div>
                </div>
                <div className="addsessionarts-results-section" style={{marginTop: '32px'}}>
                  <span className="addsessionarts-results-section-title">Bloedchemie</span>
                  <hr className="addsessionarts-results-section-underline" />
                  <div className="addsessionarts-results-blood-table">
                    <div className="addsessionarts-results-blood-row">
                      <div className="addsessionarts-results-blood-cell">
                        <span className="cell-left">CK</span>
                        <span className="cell-right">0 -145 U/L</span>
                      </div>
                      <div className="addsessionarts-results-blood-cell addsessionarts-results-blood-cell--orange">100</div>
                      <div className="addsessionarts-results-blood-cell">
                        <span className="cell-left">CK</span>
                        <span className="cell-right">0 -145 U/L</span>
                      </div>
                      <div className="addsessionarts-results-blood-cell addsessionarts-results-blood-cell--orange">100</div>
                    </div>
                  </div>
                </div>
                <div className="addsessionarts-results-actions">
                  <button className="addsessionarts-results-btn addsessionarts-results-btn--outline">annuleer</button>
                  <button className="addsessionarts-results-btn addsessionarts-results-btn--filled">sessie toevoegen</button>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="addsessionarts-sideblock-top">Scanner</div>
        <div className="addsessionarts-sideblock-bottom">Notitie</div>
      </div>
    </div>
  );
};

export default AddsessionartsPage;