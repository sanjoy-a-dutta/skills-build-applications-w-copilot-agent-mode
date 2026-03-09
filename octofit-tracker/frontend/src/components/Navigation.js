import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">OctoFit Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            <Nav.Link href="#activities">Activities</Nav.Link>
            <Nav.Link href="#workouts">Workouts</Nav.Link>
            <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
