import React from 'react';
import "./stylesheets/App.css";

const App = () => {
  const counter = 0;

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="header">My Counter</h2>

        <div className="display-box">{counter}</div>

        <div className="button-group">
          <button className="button danger" type="button">Down</button>
          <button className="button warning" type="button">Reset</button>
          <button className="button primary" type="button">Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
