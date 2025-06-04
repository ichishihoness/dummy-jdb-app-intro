import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/CalenderPage.css';

interface CalenderPageProps {
  onLogout: () => void;
}

const CalenderPage: React.FC<CalenderPageProps> = ({
  onLogout,
}) => {
  const navigate = useNavigate();

  return (
    <div className="calender-sidebar-wrapper">
      <div className="calender-sidebar">
        <hr className="calender-sidebar-divider-2" />
        <button className="calender-sidebar-btn" onClick={() => navigate('/dashboard')}>
          Dashboard
        </button>
        <button className="calender-sidebar-btn">Kalender</button>
        <button className="calender-sidebar-btn" onClick={() => navigate('/documents')}>
          Documenten
        </button>
        <button className="calender-sidebar-btn" onClick={() => navigate('/patientoverview')}>
          Patiëntenoverzicht
        </button>
        <hr className="calender-sidebar-divider-1" />
        <button className="calender-sidebar-btn" onClick={() => navigate('/appointment')}>
          Afspraak toevoegen
        </button>
        <button className="calender-sidebar-btn" onClick={() => navigate('/addsessionarts')}>
          Sessie toevoegen arts
        </button>
        <button className="calender-sidebar-btn" onClick={() => navigate('/addsessionfysio')}>
          Sessie toevoegen fysiotherapeut
        </button>
        <hr className="calender-sidebar-divider-2" />
        <button className="calender-sidebar-btn">Instellingen</button>
        <button className="calender-sidebar-btn" onClick={onLogout}>
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