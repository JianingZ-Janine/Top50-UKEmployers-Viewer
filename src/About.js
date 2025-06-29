import React from 'react';

function About() {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body text-start">
          <h2 className="card-title text-center mb-4">About Us / Contact Information</h2>
          <p className="card-text">
            This website is a project designed to provide information on The Times Top 50 Employers for Gender Equality in the UK, along with career resources.
          </p>

          <h3 className="mt-4 mb-3">Contact Information:</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Email:</strong> jianingzhang.zjn@gmail.com</li>
            <li className="list-group-item">
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jnz-uk" target="_blank" rel="noopener noreferrer" className="text-primary">Your LinkedIn Profile</a>
            </li>
            <li className="list-group-item">
              <strong>GitHub:</strong> <a href="https://github.com/JianingZ-Janine" target="_blank" rel="noopener noreferrer" className="text-primary">Your GitHub Profile</a>
            </li>
          </ul>

          <p className="card-text mt-3">
            Good luck with your job search! If you have any questions or need further information, feel free to reach out via the contact details provided above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;