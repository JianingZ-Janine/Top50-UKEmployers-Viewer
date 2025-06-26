import React from 'react';

function Events() {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body text-start">
          <h2 className="card-title text-center mb-4">Local Career Events in Edinburgh</h2>
          <p className="card-text">
            Due to the dynamic nature of event listings, this page cannot display real-time event data. However, you can find local career events in Edinburgh on the following platforms:
          </p>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="https://www.eventbrite.co.uk/d/united-kingdom--edinburgh/career-events/" target="_blank" rel="noopener noreferrer" className="text-primary">
                Eventbrite - Career Events in Edinburgh
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://www.meetup.com/find/career-growth/?location=gb--scotland--edinburgh" target="_blank" rel="noopener noreferrer" className="text-primary">
                Meetup - Career Growth Groups in Edinburgh
              </a>
            </li>
          </ul>

          <p className="card-text mt-3">
            These platforms are regularly updated with networking events, workshops, job fairs, and seminars that can help you in your career journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;