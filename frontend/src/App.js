import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hello, setHello] = useState();
  const [postgres, setPostgres] = useState();
  const [error, setError] = useState();

   useEffect(() => {
    // Update the document title using the browser API
    callAPI();
  });

  function callAPI() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => {
        setHello(data)
      })

    fetch('/api/postgres')
      .then(res => {
        if (!res.ok) {
          throw new Error(`/api/postgres HTTP status ${res.status}`)
        }

        return res
      })
      .then(res => res.json())
      .then(data => {
        setPostgres(data)
      })
      .catch(err => {
        setError(err.toString())
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="App-intro">{hello}</p>
          <p className="App-intro">{postgres}</p>
          <p className="App-intro">{error}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
