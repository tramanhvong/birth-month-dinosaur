import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [month, setMonth] = useState("january");
  const renderDinosaur = (month) => {
    month = month.toLowerCase();
    <div className="dinosaur">
            <img src={`../public/photo_stocks/${month}.jpg`} className="dinosaurImg" alt="logo" />
    </div>
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Which Dinosaur are you according to your birth month</h1>
        <h2>Credits to @crankbookscience on Instagram</h2>
      </header>

      <body className="body">
        <div className="selectMonth">
          <label htmlFor="month">Select your birth month:</label>
          <select id="month" name="month" value={month} onChange={(e) => setMonth(e.target.value)}>            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
          <button type="button" onClick={() => renderDinosaur(month)}>Get Dinosaur</button>
        </div>
      </body>
    </div>
  );
}

export default App;
