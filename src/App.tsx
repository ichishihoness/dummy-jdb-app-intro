import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;