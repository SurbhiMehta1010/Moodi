import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic
    navigate('/moodslider');
  };

  return (
    <div>
      <h1>Welcome to Mood Tracker</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LandingPage;
