import React from 'react';

function BehaviorQuestions() {
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-body text-start">
          <h2 className="card-title text-center mb-4">Preparing for Behavioral Interview Questions</h2>
          <p className="card-text">
            Behavioral questions are designed to assess your past behavior in specific situations to predict your future performance. They often start with phrases like "Tell me about a time when..." or "Give me an example of..."
          </p>

          <h3 className="mt-4 mb-3">STAR Method for Answering Behavioral Questions</h3>
          <p className="card-text">
            The STAR method is a structured way of responding to behavioral interview questions by discussing the:
          </p>
          <ul>
            <li><strong>S</strong>ituation: Describe the background and context of the situation.</li>
            <li><strong>T</strong>ask: Explain the task you had to complete.</li>
            <li><strong>A</strong>ction: Detail the specific actions you took to address the situation/task.</li>
            <li><strong>R</strong>esult: Describe the outcome of your actions and what you learned.</li>
          </ul>

          <h3 className="mt-4 mb-3">Tips for Preparation:</h3>
          <ul>
            <li><strong>Review the Job Description:</strong> Identify key skills and qualities the employer is looking for.</li>
            <li><strong>Brainstorm Experiences:</strong> Think of examples from your past (work, academic, volunteer) that demonstrate these skills.</li>
            <li><strong>Practice with STAR:</strong> For each example, practice structuring your answer using the STAR method.</li>
            <li><strong>Quantify Results:</strong> Whenever possible, use numbers or metrics to show the impact of your actions.</li>
            <li><strong>Be Honest and Authentic:</strong> While practicing is good, don't memorize answers. Be genuine in your responses.</li>
            <li><strong>Prepare Questions for the Interviewer:</strong> Show your engagement and interest.</li>
          </ul>

          <h3 className="mt-4 mb-3">Common Behavioral Question Categories:</h3>
          <ul>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Problem-solving</li>
            <li>Conflict Resolution</li>
            <li>Handling Failure/Mistakes</li>
            <li>Adaptability</li>
            <li>Time Management/Prioritization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BehaviorQuestions;