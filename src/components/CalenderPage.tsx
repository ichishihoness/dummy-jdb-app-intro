import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/CalenderPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface CalenderPageProps {
  onLogout: () => void;
  tour: boolean;
  setTour: React.Dispatch<React.SetStateAction<boolean>>;
  showCalenderTour: boolean;
  setShowCalenderTour: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourThree: boolean;
  setShowDashboardTourThree: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalenderPage: React.FC<CalenderPageProps> = ({
  onLogout,
  tour,
  setTour,
  showCalenderTour,
  setShowCalenderTour,
  showDashboardTourThree,
  setShowDashboardTourThree
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (showCalenderTour) {
      const tour = introJs()
        .setOptions({
          exitOnOverlayClick: false,
          showBullets: false,
          nextLabel: 'Volgende',
                  prevLabel: 'Terug',
                  doneLabel: 'Ik begrijp het',
          skipLabel: '',
          steps: [
            {
                    element: document.querySelector('.calender-main-block') as HTMLElement,
                    title: 'Kalender',
                    intro: 'Dit is de uitvergrote versie van de kalender.',
                    position: 'left'
                  },
                  {
                    element: document.querySelector('.calender-header-row') as HTMLElement,
                    title: 'Kalender',
                    intro: 'Met de knoppen bovenin kun je door de weken heen bladeren.',
                    position: 'bottom'
                  },
                  {
                    element: document.querySelector('.calender-event') as HTMLElement,
                    title: 'Kalender',
                    intro: 'En de blauwe blokjes in de kalender zijn afspraken die opstaan.',
                    position: 'right'
                  }
          ]
        })
        .oncomplete(() => {
                setShowCalenderTour(false);
              setShowDashboardTourThree(true);
              })
              .onexit(() => {
                setShowCalenderTour(false);
                setShowDashboardTourThree(true);
              })
                  tour.start();
        }
      }, [showCalenderTour, setShowCalenderTour]);
              

  return (
    <div className="calender-sidebar-wrapper">
      <div className="calender-sidebar">
        <hr className="calender-sidebar-divider-2" />
        <button
  className="calender-sidebar-btn dashboard-btn"
  onClick={() => {
    if (tour === false || showDashboardTourThree === true) {
      navigate('/dashboard');
    }
  }}
>
  Dashboard
</button>
  <button
    className="calender-sidebar-btn kalender-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/calender');
      }
    }}
  >
    Kalender
  </button>
  <button
    className="calender-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/documents');
      }
    }}
  >
    Documenten
  </button>
  <button
    className="calender-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/patientoverview');
      }
    }}
  >
    Patiëntenoverzicht
  </button>
  <hr className="calender-sidebar-divider-1" />
  <button
    className="calender-sidebar-btn afspraak-toevoegen-btn"
    onClick={() => {
      if (tour === false) {
        navigate('/appointment');
      }
    }}
  >
    Afspraak toevoegen
  </button>
  <button
    className="calender-sidebar-btn"
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
      <div className="calender-content">
        <div className="calender-header">
          <span>Kalender</span>
          <hr className="calender-header-underline" />
        </div>
                <div className="calender-main-block">
          <div className="calender-header-row">
            <button className="calender-arrow">{'<'}</button>
            <span className="calender-week-label">Juni 14 - 18, 2021</span>
            <button className="calender-arrow">{'>'}</button>
          </div>
          <table className="calender-table">
            <thead>
              <tr>
                <th>Tijd</th>
                <th>Ma<br />14 juni</th>
                <th>Di<br />15 juni</th>
                <th>Wo<br />16 juni</th>
                <th>Do<br />17 juni</th>
                <th>Vr<br />18 juni</th>
              </tr>
            </thead>
            <tbody>
              {['08:00', '09:00', '10:00', '11:00', '12:00'].map((tijd, i) => (
                <tr key={tijd}>
                  <td>{tijd}</td>
                  {[0,1,2,3,4].map((dag) => (
                    <td key={dag}>
                      {tijd === '10:00' && dag === 1 && (
                        <div className="calender-event">
                          10:00 - 11:30<br />
                          Patiënt<br />
                          Joep Doe
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="calender-add-btn-row">
    <button className="calender-add-btn">Toevoegen</button>
  </div>
        </div>
        <div className="calender-sideblock-top">Kalenderblok</div>
<div className="calender-sideblock-bottom">Planning</div>
      </div>
    </div>
  );
};

export default CalenderPage;