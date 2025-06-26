import React from 'react';

function Insights() {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body text-start">
          <h2 className="card-title text-center mb-4">Career Insights in the UK</h2>
          <p className="card-text">
            Explore key trends and advice for navigating the job market in the United Kingdom.
          </p>

          <h3 className="mt-4 mb-3">Current Job Market Trends:</h3>
          <ul>
            <li><strong>Tech Sector Growth:</strong> Continued demand for roles in AI, data science, cybersecurity, and cloud computing.</li>
            <li><strong>Green Economy:</strong> Increasing opportunities in renewable energy, sustainability, and environmental consulting.</li>
            <li><strong>Digital Transformation:</strong> Many traditional industries are seeking professionals with digital skills to drive innovation.</li>
            <li><strong>Flexible Working:</strong> A growing preference for hybrid and remote work models across various sectors.</li>
          </ul>

          <h3 className="mt-4 mb-3">Tips for Job Seekers:</h3>
          <ul>
            <li><strong>Networking:</strong> Connect with professionals in your target industry through LinkedIn and industry events.</li>
            <li><strong>Upskilling:</strong> Continuously learn new skills relevant to your desired roles. Online courses and certifications can be very beneficial.</li>
            <li><strong>Tailor Your Applications:</strong> Customize your CV and cover letter for each job application, highlighting relevant experience and skills.</li>
            <li><strong>Practice Interview Skills:</strong> Prepare for both technical and behavioral questions.</li>
          </ul>

          <h3 className="mt-4 mb-3">Key Industries in the UK:</h3>
          <ul>
            <li>Technology</li>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Creative Industries</li>
            <li>Professional Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Insights;