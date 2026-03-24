import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const [inputValue, setInputValue] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive) {
            return undefined;
        }

        const clock = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    setIsActive(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(clock);
    }, [isActive]);

    const toggle = () => {
        setIsActive((prev) => !prev);
    };

    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
        setInputValue('');
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    const handleStart = () => {
        const parsed = Number.parseInt(inputValue, 10);
        if (Number.isNaN(parsed) || parsed <= 0) return;

        setSeconds(Number(parsed));
        setIsActive(true);
    };

    const fmt = (n) => String(n).padStart(2, '0');
    const canStart = Number.parseInt(inputValue, 10) > 0;

    return (
        <div className="timer-box">
            {seconds === 0 && (
                <input
                    className="timer-input"
                    type="number"
                    min="1"
                    step="1"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="seconds"
                />
            )}

            <div className="timer-time">
                {fmt(Math.floor(seconds / 60))} : {fmt(seconds % 60)}
            </div>

            <div className="timer-btn-row">
                <button
                    className="timer-btn"
                    onClick={seconds === 0 ? handleStart : toggle}
                    disabled={seconds === 0 && !canStart}
                >
                    {isActive ? 'Pause' : seconds === 0 ? 'Start' : 'Continue'}
                </button>
                <button className="timer-btn" onClick={handleReset}> Reset </button>
            </div>

        </div>
    );
};

export default Timer;
