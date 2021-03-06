import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as ApiHello from 'api/hello'; 
import * as ApiPostgres from 'api/postgres';
import * as ApiDictionary from 'api/dictionary';

function App() {
  const [hello, setHello] = useState();
  const [postgres, setPostgres] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    callAPI();
  },[]);

  async function callAPI() {
    
    try
    {
      var res = await ApiHello.getHello();
      setHello(res.data)
  
      var res = await ApiPostgres.getPostgres();
      setPostgres(res.data)
    }
    catch(ex){
      setError(ex.toString());
    }
  }

  async function cc(){
    var res = await ApiDictionary.get('book');
    console.log(res.data[0].shortdef) 
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
        <button onClick={cc} >test</button>
      </header>
    </div>
  );
}

export default App;
