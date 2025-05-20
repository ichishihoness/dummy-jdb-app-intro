import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/LoginPage.css';

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