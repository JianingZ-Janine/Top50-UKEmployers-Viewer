
import React from 'react';

function Events() {
  return (
    <div className="events-container">
      <h2>Local Career Events in Edinburgh</h2>
      <p>Due to the dynamic nature of event listings, this page cannot display real-time event data. However, you can find local career events in Edinburgh on the following platforms:</p>

      <ul>
        <li>
          <a href="https://www.eventbrite.co.uk/d/united-kingdom--edinburgh/career-events/" target="_blank" rel="noopener noreferrer">
            Eventbrite - Career Events in Edinburgh
          </a>
        </li>
        <li>
          <a href="https://www.meetup.com/find/?location=gb--u8--Edinburgh&source=EVENTS" target="_blank" rel="noopener noreferrer">
            Meetup - Career Growth Groups in Edinburgh
          </a>
        </li>
      </ul>

      <p>These platforms are regularly updated with networking events, workshops, job fairs, and seminars that can help you in your career journey.</p>
    </div>
  );
}

export default Events;
