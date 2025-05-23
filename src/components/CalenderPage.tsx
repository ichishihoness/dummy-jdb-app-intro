import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/CalenderPage.css';

interface CalenderPageProps {
  onLogout: () => void;
  showAfspraakRow: boolean;
  setShowAfspraakRow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalenderPage: React.FC<CalenderPageProps> = ({
  onLogout,
  showAfspraakRow,
  setShowAfspraakRow,
}) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-sidebar">
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn" onClick={() => navigate('/dashboard')}>
          Dashboard
        </button>
        <button className="sidebar-btn">Kalender</button>
        <button className="sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="sidebar-divider-1" />
        <button className="sidebar-btn" onClick={() => navigate('/appointment')}>
          Afspraak toevoegen
        </button>
        <button className="sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="sidebar-divider-2" />
        <button className="sidebar-btn">Instellingen</button>
        <button className="sidebar-btn" onClick={onLogout}>
          Uitloggen
        </button>
      </div>
      <div className="dashboard-content">
        {/* Zet de header buiten het kalenderblok */}
        <div className="calender-header">
          <span>Kalender</span>
          <hr className="dashboard-header-underline" />
        </div>
        <div className="calendar-main-block">
          <div className="calendar-header-row">
            <button className="calendar-arrow">{'<'}</button>
            <span className="calendar-week-label">Juni 14 - 18, 2021</span>
            <button className="calendar-arrow">{'>'}</button>
          </div>
          <table className="calendar-table">
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
                        <div className="calendar-event">
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
          <button className="calendar-add-btn">Toevoegen</button>
        </div>
      </div>
    </div>
  );
};

export default CalenderPage;