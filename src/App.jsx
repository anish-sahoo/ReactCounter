import React, { useState } from 'react';
import "./style/App.css";
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [negCount, setNeg] = useState(0);
  const [confetti, setConfetti] = useState(false);

  const a = ['Why do you disappoint yourself?', 'Why do you disappoint us?', 'Try clicking reset'];
  
  const handleDown = () => {
    if(counter === 0){
      if(negCount === 2){
        setNeg(0);
        handleConfetti();
      }
      setNeg(negCount + 1);
      toast.error(a[negCount%3])
    }
    else {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    toast.success('Reset Successful')
    setCounter(0);
    setNeg(0);
  };

  const handleUp = () => {
    if((counter+1)%10 === 0){
      toast.success('Great job! You reached '+(counter+1));
    }
    if((counter+1)%5 === 0){
      handleConfetti();
    }
    setCounter(counter + 1);
  }

  const handleConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);
  };

  return (
    <div className="container">
      <Toaster/>
      <div className='confetti'>{confetti && <Confetti width={window.innerWidth} height={window.innerHeight} wind={0.02}/>}</div>
      <div className="main-content">
        <h2 className="header">My Counter</h2>

        <div className="display-box">{counter}</div>

        <div className="button-group">
          <button className="button danger" type="button" onClick={() => handleDown()}>Down</button>
          <button className="button warning" type="button" onClick={() => handleReset()}>Reset</button>
          <button className="button primary" type="button" onClick={() => handleUp()}>Up</button>
        </div>
      </div>
    </div>
  );
}

export default App;
