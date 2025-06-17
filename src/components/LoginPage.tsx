import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginPage.css';
import '../styling/Onboardingtour.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [personeelsnummer, setPersoneelsnummer] = useState('');
  const [email, setEmail] = useState('');
  const [wachtwoord, setWachtwoord] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(personeelsnummer, wachtwoord);
    navigate('/dashboard');
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <button
          type="button"
          onClick={() => {
            introJs().setOptions({
              
              steps: [
                  {
          intro: 'Welkom! Dit is het inlogscherm.'
        },
        {
          element: document.querySelector('input[placeholder="Je personeelsnummer"]') as HTMLElement | null,
          intro: 'Vul hier je personeelsnummer in.'
        },
        {
          element: document.querySelector('input[placeholder="Je e-mailadres"]') as HTMLElement | null,
          intro: 'Vul hier je e-mailadres in.'
        },
        {
          element: document.querySelector('input[placeholder="Je wachtwoord"]') as HTMLElement | null,
          intro: 'Vul hier je wachtwoord in.'
        },
        {
          element: document.querySelector('.login-container button') as HTMLElement | null,
          intro: 'Klik hier om in te loggen.'
        }
              ]
              
            }).start();
          }}
          style={{ marginBottom: 16, marginLeft: 8 }}
        >
          Start rondleiding
        </button>
        <h2>Inloggen</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={personeelsnummer}
              onChange={e => setPersoneelsnummer(e.target.value)}
              required
              placeholder="Je personeelsnummer"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Je e-mailadres"
            />
          </div>
          <div>
            <input
              type="password"
              value={wachtwoord}
              onChange={e => setWachtwoord(e.target.value)}
              required
              placeholder="Je wachtwoord"
            />
          </div>
          <span className="forgot-password">Wachtwoord vergeten?</span>
          <button className="login-container button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;