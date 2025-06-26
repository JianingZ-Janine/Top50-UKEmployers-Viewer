
import React, { useState, useEffect } from 'react';
import companyData from './company_info.json';
import companyLogo from './companylogo.png'; // Import your image

function CompanyInfo() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    setCompanies(companyData);
  }, []);

  return (
    <>
      {/* Combined Header and Introduction Section */}
      <div className="container-fluid bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5"> {/* Increased gap to g-5 */}
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center"> {/* Adjusted column width */}
              <img src={companyLogo} alt="Company Logo" className="img-fluid rounded" style={{ maxWidth: '500px', height: 'auto', objectFit: 'contain' }} />
            </div>
            <div className="col-12 col-md-7 text-start"> {/* Adjusted column width */}
              <h2 className="display-6 mb-3">The Times Top 50 Employers (UK 2025) - Find Your Next Career Move</h2> 
              <p className="lead">
                The Times Top 50 Employers for Gender Equality is the UK’s most highly profiled and well-established listing of employers taking action to create workplaces where everyone, regardless of gender, can thrive. It is our annual flagship award, led by Business in the Community (BITC) since 2011, which celebrates the achievements and the impactful efforts of organisations that have been at the forefront of championing gender equality in the workplace.
              </p>
              <p className="lead mb-0">
                More details can be viewed at <a href="https://www.bitc.org.uk/the-times-top-50-employers-for-gender-equality/" target="_blank" rel="noopener noreferrer" className="text-info">https://www.bitc.org.uk/the-times-top-50-employers-for-gender-equality/</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company List Section */}
      <main className="container my-5">
        <div className="row g-4">
          {companies.map((company, index) => (
            <div key={index} className="col-12 col-md-6 d-flex">
              <div className="card shadow-sm h-100 w-100 company-card-hover"> {/* Added company-card-hover class */}
                <div className="card-body text-start">
                  <h2 className="card-title fs-4 text-primary">{company.company}</h2> {/* Added text-primary for company name */}
                  <p className="card-text mb-1">
                    <strong>LinkedIn:</strong> <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">{company.linkedin}</a>
                  </p>
                  <p className="card-text mb-1">
                    <strong>Career Website:</strong> <a href={company.career_website} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">{company.career_website}</a>
                  </p>
                  {company.edinburgh_office && (
                    <p className="card-text mb-0"><strong>Edinburgh Office:</strong> {company.edinburgh_office}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default CompanyInfo;
