import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Categories from './Categories';
import Leaderboard from './Leaderboard';
import Profile from './Profile';
import Play from './Play';
import Game from './Game';
import Login from './Login';
import '../Styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="play" element={<Play />} />
          <Route path="play/game" element={<Game />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
