import { useState, useEffect, useContext } from 'react';
import { getCurrentDate } from '../../utils/getCurrentDate';
import ContentContext from '../../contexts/ContentContext';
const DateTime = () => {
    const { isClicked } = useContext(ContentContext);
    const [time, setTime] = useState('');
    useEffect(() => {
        const myInterval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, []);
    return !isClicked ? (
        <>
            <div id="data-time">
                <p id="count" className="font-2rem">
                    {getCurrentDate('/')}
                </p>
                <p className="font-2rem">{time}</p>
                <div></div>
            </div>
        </>
    ) : (
        <></>
    );
};
export default DateTime;
