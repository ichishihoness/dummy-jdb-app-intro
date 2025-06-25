import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/DashboardPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

export interface DashboardPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  tour: boolean;
  setTour: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourOne: boolean;
  setshowDashboardTourOne: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourTwo: boolean;
  setshowDashboardTourTwo: React.Dispatch<React.SetStateAction<boolean>>;
  showDashboardTourThree: boolean;
  setShowDashboardTourThree: React.Dispatch<React.SetStateAction<boolean>>;
  showAppointmentTour: boolean;
  setShowAppointmentTour: React.Dispatch<React.SetStateAction<boolean>>;
  showCalenderTour: boolean;
  setShowCalenderTour: React.Dispatch<React.SetStateAction<boolean>>;
  showSessionaTour: boolean;
  setShowSessionaTour: React.Dispatch<React.SetStateAction<boolean>>;
  showSessionfTour: boolean;
  setShowSessionfTour: React.Dispatch<React.SetStateAction<boolean>>;
  showDocumentsTour: boolean;
  setShowDocumentsTour: React.Dispatch<React.SetStateAction<boolean>>;
  showPatientsTour: boolean;
  setShowPatientsTour: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  onLogout,
  tour,
  setTour,
  showAfspraakRow,
  showDashboardTourOne,
  setshowDashboardTourOne,
  showDashboardTourTwo,
  setshowDashboardTourTwo,
  showDashboardTourThree,
  setShowDashboardTourThree,
  showAppointmentTour,
  setShowAppointmentTour,
  showSessionaTour,
  setShowCalenderTour,
  showCalenderTour,
  setShowSessionaTour,
  showSessionfTour,
  setShowSessionfTour,
  showDocumentsTour,
  setShowDocumentsTour,
  showPatientsTour,
  setShowPatientsTour
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'Oplopend' | 'Aflopend'>('Oplopend');
  const [showAddAppointmentIndicator, setShowAddAppointmentIndicator] = useState(false);
  const [showCalenderIndicator, setShowCalenderIndicator] = useState(false);
  const [showDocumentsIndicator, setShowDocumentsIndicator] = useState(false);
  const [showPatientsIndicator, setShowPatientsIndicator] = useState(false);
  const [showSessionaIndicator, setShowSessionaIndicator] = useState(false);
  const [showSessionfIndicator, setShowSessionfIndicator] = useState(false);
  const navigate = useNavigate();

  const handleSortClick = (order: 'Oplopend' | 'Aflopend') => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

useEffect(() => {
  if (showDashboardTourOne) {
    const tour = introJs()
      .setOptions({
        exitOnOverlayClick: false,
        showBullets: false,
        nextLabel: 'Vertel me meer',
        prevLabel: 'Terug',
        doneLabel: 'Vertel me meer',
        skipLabel: '',
        steps: [
          {
            intro: `
              Dit is de homepagina van het JDB systeem. Vanuit hier kun je naar verschillende onderdelen van het systeem navigeren. <br /><br />
              Daarnaast zie je hier ook snel wat algemene informatie. <br /><br />
              Na te hebben ingelogd zal u altijd op dit scherm terecht komen.<br />
            `,
          },
        ],
      })
      .onafterchange(() => {
        setTimeout(() => {
          const buttonContainer = document.querySelector('.introjs-tooltipbuttons');
          if (buttonContainer) {
            const oldCloseBtn = document.getElementById('close-tour-btn');
            if (oldCloseBtn) oldCloseBtn.remove();
            const oldSkipBtn = document.getElementById('skip-tour-btn');
            if (oldSkipBtn) oldSkipBtn.remove();

            const closeBtn = document.createElement('button');
            closeBtn.id = 'close-tour-btn';
            closeBtn.className = 'introjs-button introjs-close-btn';
            closeBtn.innerHTML = 'Rondleiding<br>volledig overslaan';
            closeBtn.onclick = () => {
              tour.exit(true);
              setshowDashboardTourOne(false);
            };

            const skipBtn = document.createElement('button');
            skipBtn.id = 'skip-tour-btn';
            skipBtn.className = 'introjs-button introjs-skip-btn';
            skipBtn.innerHTML = 'Ik begrijp<br>hoe dit werkt';
            skipBtn.onclick = () => {
              tour.exit(true);
              setshowDashboardTourOne(false);
              setShowAddAppointmentIndicator(true);
            };

            buttonContainer.insertBefore(closeBtn, buttonContainer.firstChild);
            buttonContainer.insertBefore(skipBtn, buttonContainer.children[1]);
          }
        }, 0);
      })
      .oncomplete(() => {
        setTimeout(() => {
          introJs()
            .setOptions({
              exitOnOverlayClick: false,
              scrollToElement: false,
              nextLabel: 'Volgende',
              prevLabel: 'Terug',
              doneLabel: 'Ik begrijp het',
              skipLabel: '',
              steps: [
                {
                  element: document.querySelector('.dashboard-sidebar') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Door middel van de knoppen links in het scherm kun je snel naar pagina’s navigeren.',
                  disableInteraction: true
                },
                {
                  element: document.querySelector('.steptwoblock') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Rechts zijn in een oogopslag afspraken van deze maand te zien in de kalender, en er kan snel een notitie worden gemaakt',
                  position: 'left'
                },
                {
                  element: document.querySelector('.dashboard-afsprakenlijst') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'In het midden is de lijst met patiënten met een aankomende afspraak te zien!',
                  position: 'right',
                },
                {
                  element: document.querySelector('.afspraak-toevoegen-btn') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Met deze knop kunnen afspraken worden aangemaakt. Klik erop om het eens te proberen!',
                  position: 'right',
                  disableInteraction: true,
                },
              ],
            })
      .oncomplete(() => {
        setShowAddAppointmentIndicator(true); 
        setshowDashboardTourOne(false);
      })
      .onexit(() => {
        setshowDashboardTourOne(false);
      })
            .start();
        }, 300);
        setshowDashboardTourOne(false);

      })
      .onexit(() => {
        setshowDashboardTourOne(false);
        setShowAppointmentTour(true)
      });
      

    tour.start();
  }
}, [showDashboardTourOne, setshowDashboardTourOne, setShowAppointmentTour]);

useEffect(() => {
  if (showDashboardTourTwo) {
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
            element: document.querySelector('.dashboard-afspraak-row') as HTMLElement,
            title: 'Afspraak toevoegen',
            intro: 'De afspraak is nu toegevoegd aan de lijst op de homepagina!',
            position: 'bottom',
          },
          {
            intro: `
              Er is nu een afspraak toegevoegd en is te zien in de lijst op de homepagina<br /><br />
              Door op de drie puntjes rechts van een afspraak te klikken kun je het openen en er meer informatie over te zien krijgen<br /><br />
              Ook is de afspraak in de kalender te vinden.<br />
            `
          },
          {
            element: document.querySelector('.kalender-btn') as HTMLElement,
            title: 'Kalender',
            intro: 'De afspraak is nu toegevoegd aan de lijst op de homepagina!',
            position: 'right',
            disableInteraction: true
          }
        ],
      })
      .onafterchange(function () {
        setTimeout(() => {
          const prevBtn = document.querySelector('.introjs-prevbutton');
          if (this._currentStep === 1 && prevBtn) {
            (prevBtn as HTMLElement).style.display = 'none';
          } else if (prevBtn) {
            (prevBtn as HTMLElement).style.display = '';
          }

          if (this._currentStep === 1) {
            const buttonContainer = document.querySelector('.introjs-tooltipbuttons');
            if (buttonContainer) {
              const oldCloseBtn = document.getElementById('close-tour-btn');
              if (oldCloseBtn) oldCloseBtn.remove();
              const oldSkipBtn = document.getElementById('skip-tour-btn');
              if (oldSkipBtn) oldSkipBtn.remove();

              const closeBtn = document.createElement('button');
              closeBtn.id = 'close-tour-btn';
              closeBtn.className = 'introjs-button introjs-close-btn';
              closeBtn.innerHTML = 'Rondleiding<br>volledig overslaan';
              closeBtn.onclick = () => {
                tour.exit(true);
                setshowDashboardTourTwo(false);
                setShowCalenderTour(false);
              };

              const skipBtn = document.createElement('button');
              skipBtn.id = 'skip-tour-btn';
              skipBtn.className = 'introjs-button introjs-skip-btn';
              skipBtn.innerHTML = 'Ik begrijp<br>hoe dit werkt';
              skipBtn.onclick = () => {
                tour.exit(true);
                setshowDashboardTourTwo(false);
                setShowCalenderTour(false);
                setShowDashboardTourThree(true);
              };

              buttonContainer.insertBefore(closeBtn, buttonContainer.firstChild);
              buttonContainer.insertBefore(skipBtn, buttonContainer.children[1]);
            }
          } else {
            const oldCloseBtn = document.getElementById('close-tour-btn');
            if (oldCloseBtn) oldCloseBtn.remove();
            const oldSkipBtn = document.getElementById('skip-tour-btn');
            if (oldSkipBtn) oldSkipBtn.remove();
          }

          const nextBtn = document.querySelector('.introjs-nextbutton');
          if (nextBtn) {
            if (this._currentStep === 1) {
              (nextBtn as HTMLElement).innerHTML = 'Vertel me meer';
            } else {
              (nextBtn as HTMLElement).innerHTML = 'Volgende';
            }
          }
        }, 0);
      })
      .oncomplete(() => {
        setshowDashboardTourTwo(false);
        setShowCalenderTour(true);
        setShowCalenderIndicator(true);
      })
      .onexit(() => {
        setshowDashboardTourTwo(false);
        setShowCalenderTour(true);
      });

    tour.start();
  }
}, [showDashboardTourTwo, setshowDashboardTourTwo]);

useEffect(() => {
  if (showDashboardTourThree) {
    const tour = introJs()
      .setOptions({
        exitOnOverlayClick: false,
        showBullets: false,
        nextLabel: 'Volgende',
        prevLabel: 'Terug',
        doneLabel: 'Volgende tour',
        skipLabel: '',
        steps: [
          {
            intro: `
              Selecteer een andere knop naar een pagina waar je meer informatie over zou willen hebben<br /><br />
              Je zou ook later d.m.v. de ‘Help’ knop de tour voor de pagina laten verschijnen van de pagina waar je op de help knop geklikt hebt.<br /><br />
              Mocht u meer informatie willen over waarom besloten is dit systeem te ontwikkelen en in te zetten, of over privacy van uwzelf of patiënten kunt u vinden via de onderstaande knoppen.<br />
            `
          }
        ],
      })
      .onafterchange(() => {
        setTimeout(() => {
          const buttonContainer = document.querySelector('.introjs-tooltipbuttons');
          // Verwijder oude knoppen als ze bestaan
          const oldCloseBtn = document.getElementById('close-tour-btn');
          if (oldCloseBtn) oldCloseBtn.remove();
          const oldMoreBtn = document.getElementById('more-tour-btn');
          if (oldMoreBtn) oldMoreBtn.remove();

          // Close button (helemaal links)
          const closeBtn = document.createElement('button');
          closeBtn.id = 'close-tour-btn';
          closeBtn.className = 'introjs-button introjs-close-btn';
          closeBtn.innerHTML = 'Rondleiding<br>beïndigen';
          closeBtn.onclick = () => {
            introJs().exit(true);
            setShowDashboardTourThree(false);
            setTour(false);
            setShowSessionaTour(false);
            setShowSessionfTour(false);
            setShowDocumentsTour(false);
            setShowPatientsTour(false);
          };

          const moreBtn = document.createElement('button');
          moreBtn.id = 'more-tour-btn';
          moreBtn.className = 'introjs-button introjs-more-btn';
          moreBtn.innerHTML = 'Meer informatie<br>over privacy regels<br>en het JDB systeem';
          moreBtn.onclick = () => {
            introJs().exit(true);
            setShowDashboardTourThree(false);
            setTour(false);
            setShowSessionaTour(false);
            setShowSessionfTour(false);
            setShowDocumentsTour(false);
            setShowPatientsTour(false);
          };

          if (buttonContainer) {
            buttonContainer.insertBefore(closeBtn, buttonContainer.firstChild);
            buttonContainer.insertBefore(moreBtn, buttonContainer.children[1]);
          }
        }, 0);
      })
      .oncomplete(() => {
        setShowDocumentsIndicator(true);
        setShowPatientsIndicator(true);
        setShowSessionaIndicator(true);
        setShowSessionfIndicator(true);
        setShowSessionaTour(true);
        setShowSessionfTour(true);
        setShowDocumentsTour(true);
        setShowPatientsTour(true);
      })
      .onexit(() => {
        setShowSessionaTour(true);
        setShowSessionfTour(true);
        setShowDocumentsTour(true);
        setShowPatientsTour(true);
      });

    tour.start();
  }
}, [
  showDashboardTourThree,
  setShowDashboardTourThree,
  setTour,
  setShowSessionaTour,
  setShowSessionfTour,
  setShowDocumentsTour,
  setShowPatientsTour,
  setShowDocumentsIndicator,
  setShowPatientsIndicator,
  setShowSessionaIndicator,
  setShowSessionfIndicator
]);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
  <hr className="dashboard-sidebar-divider-2" />
  <button className="dashboard-sidebar-btn">Dashboard</button>
  <button
  className={`dashboard-sidebar-btn kalender-btn${showCalenderIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showCalenderTour === true) {
      setShowCalenderIndicator(false); 
      navigate('/calender');
    }
  }}
>
  Kalender
</button>
<button
  className={`dashboard-sidebar-btn${showDocumentsIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showDocumentsTour === true) {
      setShowDocumentsIndicator(false);
      navigate('/documents');
    }
  }}
>
  Documenten
</button>
<button
  className={`dashboard-sidebar-btn${showPatientsIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showPatientsTour === true) {
      setShowPatientsIndicator(false);
      navigate('/patientoverview');
    }
  }}
>
  Patiëntenoverzicht
</button>
<hr className="dashboard-sidebar-divider-1" />
<button
  className={`dashboard-sidebar-btn afspraak-toevoegen-btn${showAddAppointmentIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showAppointmentTour === true) {
      setShowAddAppointmentIndicator(false);
      navigate('/appointment');
    }
  }}
>
  Afspraak toevoegen
</button>
<button
  className={`dashboard-sidebar-btn${showSessionaIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showSessionaTour === true) {
      setShowSessionaIndicator(false);
      navigate('/addsessionarts');
    }
  }}
>
  Sessie toevoegen arts
</button>
<button
  className={`dashboard-sidebar-btn${showSessionfIndicator ? ' pulse-indicator' : ''}`}
  onClick={() => {
    if (tour === false || showSessionfTour === true) {
      setShowSessionfIndicator(false);
      navigate('/addsessionfysio');
    }
  }}
>
  Sessie toevoegen fysiotherapeut
</button>
  <hr className="dashboard-sidebar-divider-2" />
  <button className="dashboard-sidebar-btn">Instellingen</button>
  <button
    className="dashboard-sidebar-btn"
    onClick={() => {
      if (tour === false) {
        onLogout();
      }
    }}
  >
    Uitloggen
  </button>
</div>
      <div className="dashboard-content">
        <div className="dashboard-header">
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
          <div className="kalender volledige">kalender volledig</div>
          <div className="kalender patiënten">kalender patienten</div>
          <div className="notities">notities</div>
          <div className="steptwoblock"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;