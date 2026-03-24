import { useState } from 'react';
import Timer from '../components/Timer.jsx';
import Stopwatch from '../components/Stopwatch.jsx';
import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState('stopwatch');

  return (
    <div id="app-shell">
      <div id="card">                      {/* new wrapper */}

        <div id="tab-bar">
          <button
            className={`tab-btn ${activeTab === 'stopwatch' ? 'active' : ''}`}
            onClick={() => setActiveTab('stopwatch')}
          >
            Stopwatch
          </button>
          <button
            className={`tab-btn ${activeTab === 'timer' ? 'active' : ''}`}
            onClick={() => setActiveTab('timer')}
          >
            Timer
          </button>
        </div>

        <div id="tab-content">             {/* new wrapper */}
          {activeTab === 'stopwatch' && <Stopwatch />}
          {activeTab === 'timer' && <Timer />}
        </div>

      </div>
    </div>
  );
}

export default App
