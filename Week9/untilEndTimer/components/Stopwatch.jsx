import { useState, useEffect } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive){
            const clock = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);

            return () => clearInterval(clock);
        }
        
    }, [isActive]);

    const toggle = () => {
        setIsActive(prev => !prev);
    }
    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    }

    const fmt = (n) => String(n).padStart(2, '0');

    return (
        <div id="timerBox">

            <div id="time">
                {fmt(Math.floor(seconds / 60))} : {fmt(seconds % 60)}
            </div>

            <div className="btn-row">
                <button className="btn" onClick={toggle}>
                    {isActive ? 'Pause' : seconds === 0 ? 'Start' : 'Continue'}
                </button>
                <button className="btn" onClick={resetTimer}> Reset </button> 
            </div>

        </div>
    )
}

export default Stopwatch;
