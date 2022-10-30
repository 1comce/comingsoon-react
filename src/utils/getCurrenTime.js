export function getCurrentTime(separator = '') {
    let newDate = new Date();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    return `${hour}${separator}${minute < 10 ? `0${minute}` : `${minute}`}${separator}${second}`;
}
