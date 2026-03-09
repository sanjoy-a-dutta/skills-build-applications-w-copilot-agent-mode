import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Navigation />
      <div className="container py-4">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
