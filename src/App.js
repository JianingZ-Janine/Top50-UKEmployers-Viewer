
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components
import CompanyInfo from './CompanyInfo';
import BehaviorQuestions from './BehaviorQuestions';
import Insights from './Insights';
import Events from './Events';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Top 50 Employers</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Company Info</Nav.Link>
                <Nav.Link as={Link} to="/cv-library">CV Library</Nav.Link>
                <Nav.Link as={Link} to="/behavior-questions">Behavior Questions</Nav.Link>
                <Nav.Link as={Link} to="/insights">Insights</Nav.Link>
                <Nav.Link as={Link} to="/events">Events</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
