import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <Card className="mb-4 shadow">
          <Card.Body>
            <Card.Title as="h1" className="mb-3 text-primary">Welcome to OctoFit Tracker</Card.Title>
            <Card.Text>
              Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions!
            </Card.Text>
            <Button variant="primary" href="#activities">View Activities</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
