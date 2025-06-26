import React, { useState, useEffect } from 'react';
import './App.css';
import companyData from './company_info.json';

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companyData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Times Top 50 Employers (UK 2025) - Company Info</h1>
      </header>
      <main>
        <div className="company-list">
          {companies.map((company, index) => (
            <div key={index} className="company-item">
              <h2>{company.company}</h2>
              <p>
                <strong>LinkedIn:</strong> <a href={company.linkedin} target="_blank" rel="noopener noreferrer">{company.linkedin}</a>
              </p>
              <p>
                <strong>Career Website:</strong> <a href={company.career_website} target="_blank" rel="noopener noreferrer">{company.career_website}</a>
              </p>
              {company.edinburgh_office && (
                <p><strong>Edinburgh Office:</strong> {company.edinburgh_office}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;