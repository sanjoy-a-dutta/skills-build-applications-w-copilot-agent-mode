
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} className="octofit-logo-small navbar-logo" alt="OctoFit Logo" />
        <span className="navbar-title">OctoFit Tracker</span>
      </nav>
      <header className="App-header">
        <h1>Welcome to OctoFit Tracker</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
