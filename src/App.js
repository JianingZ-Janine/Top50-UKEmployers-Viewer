import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CompanyInfo from './CompanyInfo';
import BehaviorQuestions from './BehaviorQuestions';
import Insights from './Insights';
import Events from './Events';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">Company Info</Link></li>
            <li className="nav-item"><Link to="/cv-library">CV Library</Link></li>
            <li className="nav-item"><Link to="/behavior-questions">Behavior Questions</Link></li>
            <li className="nav-item"><Link to="/insights">Insights</Link></li>
            <li className="nav-item"><Link to="/events">Events</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CompanyInfo />} />
          <Route path="/cv-library" element={<h2>CV Library Page (Coming Soon!)</h2>} />
          <Route path="/behavior-questions" element={<BehaviorQuestions />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;