import React, { useState } from 'react';
import "./stylesheets/App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="header">My Counter</h2>

        <div className="display-box">{counter}</div>

        <div className="button-group">
          <button className="button danger" type="button" onClick={() => setCounter(counter - 1)}>Down</button>
          <button className="button warning" type="button" onClick={() => setCounter(0)}>Reset</button>
          <button className="button primary" type="button" onClick={() => setCounter(counter + 1)}>Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
