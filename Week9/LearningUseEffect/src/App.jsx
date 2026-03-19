import { useEffect, useState } from 'react';
import './App.css';


//------------------------------
// function App(){
//   const [currentTab, setCurrentTab] = useState("Feed");
//   const [tabData, setTabData] = useState({});
//   const [Loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("send request to the backend to get data for tab "+currentTab);
//     setLoading(true);
//     fetch('https://jsonplaceholder.typicode.com/todos/1' + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//       });
//   }, [currentTab])

//   return <div> 
//     <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ? "red" : "Yellow"}}>Todo #1</button>
//     <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "Yellow"}}>Todo #2</button>
//     <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "Yellow"}}>Todo #3</button>
//     <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "Yellow"}}>Todo #4</button>
//     <br/>
//     {Loading ? "Loading..." : tabData.title}
//   </div>
// }

// -----------------------------------

function App() {

  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() =>{
      setShowTimer(showTimer => !showTimer);
    }, 5000)
  }, [])
  
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

    //cleanup function

    return function() {
      clearInterval(clock);
    }
  }, []);

  return <div>{console.log({seconds})} <br /> {seconds} seconds elapsed</div>
}

export default App
