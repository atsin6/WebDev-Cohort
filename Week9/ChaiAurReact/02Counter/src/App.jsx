import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter = 13;

  const addValue = () => {
    console.log("Value added", counter);
    // counter = counter+1;
    if(counter + 1 > 20){
      console.log("Value cannot be increased further");
    }else{
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    console.log("Value decreased", counter);
    if(counter - 1 < 0){
      console.log("Value cannot be decreased further");
    }else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick = {addValue}>Add value</button>
      <br />
      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
