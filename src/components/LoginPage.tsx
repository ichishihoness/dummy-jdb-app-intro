import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    introJs()
      .setOptions({
        exitOnOverlayClick: false,
        showBullets: false,
        skipLabel: '',
        steps: [
          {
            intro: `
              Welkom bij de introductie rondleiding van het JDB systeem<br /><br />
              Tijdens deze rondleiding zal je alles te weten komen dat nodig is om te leren omgaan met dit systeem.<br /><br />
              Je zult deze tour maar één keer te zien krijgen,<br />
              maar kan hem later altijd weer opnieuw oproepen mocht u hulp nodig hebben.<br /><br />
              Allereerst zal u in moeten loggen met uw gegevens.
            `
          }
        ]
      })
      .oncomplete(() => {
        setTimeout(() => {
          introJs()
            .setOptions({
              exitOnOverlayClick: false,
              skipLabel: '',
              steps: [
                {
                  element: document.querySelector('input[placeholder="Je personeelsnummer"]') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Met middel van de knoppen links in het scherm kun je snel naar pagina’s navigeren',
                  position: 'right'
                },
                {
                  element: document.querySelector('input[placeholder="Je e-mailadres"]') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Links is in een oogopslag de huidige maand te zien in de kalender, en er kan snel een notitie worden gemaakt',
                  position: 'right'
                },
                {
                  element: document.querySelector('input[placeholder="Je wachtwoord"]') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'In het midden is de lijst met patiënten met een aankomende afspraak te zien',
                  position: 'right'
                },
                {
                  element: document.querySelector('.forgot-password') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'Met deze knop kunnen afspraken worden aangepaakt. Klik erop om het eens te proberen!'
                },
                {
                  element: document.querySelector('.login-container button') as HTMLElement,
                  title: 'Homepagina',
                  intro: 'En met deze knop log je in'
                }
              ]
            })
            .start();
        }, 300);
      })
      .start();
  }, []);

  return (
    <div className="login-bg">
      <div className="login-container">
        {/* De knop is niet meer nodig, want de tour start automatisch */}
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
          <button type="submit" className="login-container button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;