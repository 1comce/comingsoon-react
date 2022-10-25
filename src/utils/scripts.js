var countDownDate = new Date('DEC 31, 2022 00:00:00').getTime();
console.log(countDownDate);

var countDown = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('count').innerHTML = days + 'D ' + hours + 'H ' + minutes + 'M ' + seconds + 'S ';
    if (distance <= 0) clearInterval(countDown);
}, 1000);

