import { useState, useContext } from 'react';
import axiosPublic from '../../api/axios';
import ContentContext from '../../contexts/ContentContext';
import axios from 'axios';
const Location = () => {
    const { isClicked, setClicked } = useContext(ContentContext);
    const [state, setState] = useState('');
    const [status, setStatus] = useState('');
    const GOOGLE_API_KEY = 'AIzaSyBFr6BOm3SqaEXAFcofVtxagNGg2qsJge4';
    const getLocation = () => {
        setClicked((prevState) => !prevState);
        const success = async (position) => {
            let { latitude, longitude } = position.coords;
            await axiosPublic
                .post(
                    '/location/reversegeo',
                    JSON.stringify({
                        latitude,
                        longitude,
                    }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true,
                    },
                )
                .then((response) => setState(response.data.results[1].formatted_address))
                .catch((error) => alert(error.message));
        };
        const handleError = (error) => {
            const { code } = error;
            switch (code) {
                case error.TIMEOUT:
                    alert('Time out');
                    // Handle timeout.
                    break;
                case error.PERMISSION_DENIED:
                    alert('Permission denied');
                    // User denied the request.
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('Unavailable');
                    // Position not available.
                    break;
                case error.UNKNOWN_ERROR:
                    alert('Unknown Error');
                    break;
            }
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, handleError, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
        findLocation();
    };
    const findLocation = async () => {
        await axios
            .post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`)
            .then((response) => {
                console.log(response.data.location);
                let { lat, lng } = response.data.location;
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setStatus(data.results[1].formatted_address);
                        console.log(data);
                    })
                    .catch((error) => alert(error.message));
            })
            .catch((error) => console.log(error.message));
    };
    const hideLocation = () => {
        setClicked((prevState) => !prevState);
        setState('');
        setStatus('');
    };
    return (
        <div className="location">
            {state ? <p className="font-2rem">GPS Address: {state}</p> : <></>}
            {status ? <p className="font-2rem">IP Address: {status}</p> : <></>}
            {!isClicked ? (
                <button className="font-2rem btn btn-primary" onClick={getLocation}>
                    get location
                </button>
            ) : (
                <button className="font-2rem btn btn-primary" onClick={hideLocation}>
                    hide
                </button>
            )}
        </div>
    );
};
export default Location;
