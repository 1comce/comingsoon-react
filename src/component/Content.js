import React from 'react';
import { useState, useEffect } from 'react';
import { getCurrentDate } from '../utils/getCurrentDate';
export default function Content() {
    const [time, setTime] = useState('');

    // Logic, computation to update time (which is side-effect) should put inside useEffect
    useEffect(() => {
        const myInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clear side-effect when component unmount (componentWillUnmount)
        return () => {
            clearInterval(myInterval);
        };
    }, []);
    return (
        <div id="content">
            <h1>COMING SOON</h1>
            <hr />
            <p id="count" className="font-2rem" onClick={clearInterval(setTime)}>
                {getCurrentDate('/')}
            </p>
            <p className="font-2rem">{time}</p>
        </div>
    );
}
