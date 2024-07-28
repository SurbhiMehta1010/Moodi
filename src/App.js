import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import MoodSlider from './Moodslider';
import Overview from './Overview';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/moodslider" element={<MoodSlider />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
