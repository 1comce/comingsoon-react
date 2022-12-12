const findLocation = () => {
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position);
        let { latitude, longitude } = position.coords;
    };

    const handleError = (error) => {
        status.textContent = 'Unable to retrieve your location';
        const { code } = error;
        switch (code) {
            case GeolocationPositionError.TIMEOUT:
                // Handle timeout.
                break;
            case GeolocationPositionError.PERMISSION_DENIED:
                // User denied the request.
                break;
            case GeolocationPositionError.POSITION_UNAVAILABLE:
                // Position not available.
                break;
        }
    };

    navigator.geolocation.getCurrentPosition(success, handleError, { maximumAge: 600_000 });
};

export default findLocation;
