import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() =>{
      setShowTimer(showTimer => !showTimer);
    }, 5000)
  });
  
  return <div>
      {showTimer &&  <Timer />}
    </div>
  
}

const Timer = () => {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    
    let clock = setInterval(() => {
      console.log("from inside clock")
      setSeconds(prev => prev+1);
    }, 1000)

    return function() {
      clearInterval(clock);
    }
  }, []);

  return <div>{console.log({seconds})} <br /> {seconds} seconds elapsed</div>
}

export default App
