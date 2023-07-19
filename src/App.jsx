import React, { useState } from 'react';
import "./style/App.css";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [negCount, setNeg] = useState(0);

  const handleDown = () => {
    if(counter == 0){
      setNeg(negCount + 1);
      toast('Why do you disappoint yourself?')
    }
    else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2 className="header">My Counter</h2>

        <div className="display-box">{counter}</div>

        <div className="button-group">
          <button className="button danger" type="button" onClick={() => handleDown()}>Down</button>
          <button className="button warning" type="button" onClick={() => setCounter(0)}>Reset</button>
          <button className="button primary" type="button" onClick={() => setCounter(counter + 1)}>Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
