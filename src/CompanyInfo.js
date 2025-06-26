
import React, { useState, useEffect } from 'react';
import companyData from './company_info.json';

function CompanyInfo() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companyData);
  }, []);

  return (
    <>
      <header className="App-header">
        <h1>The Times Top 50 Employers (UK 2025) - Company Info</h1>
      </header>

      <section className="introduction-section">
        <p>
          The Times Top 50 Employers for Gender Equality is the UK’s most highly profiled and well-established listing of employers taking action to create workplaces where everyone, regardless of gender, can thrive. It is our annual flagship award, led by Business in the Community (BITC) since 2011, which celebrates the achievements and the impactful efforts of organisations that have been at the forefront of championing gender equality in the workplace.
        </p>
        <p>
          More details can be viewed at <a href="https://www.bitc.org.uk/the-times-top-50-employers-for-gender-equality/" target="_blank" rel="noopener noreferrer">https://www.bitc.org.uk/the-times-top-50-employers-for-gender-equality/</a>
        </p>
      </section>

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
    </>
  );
}

export default CompanyInfo;
