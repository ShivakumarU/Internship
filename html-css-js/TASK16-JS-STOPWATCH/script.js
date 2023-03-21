let hour = 00, minute = 00, second = 00;
document.getElementById("button1").addEventListener('click', function () {
    timer = true;
    stopWatch();
});
document.getElementById("button2").addEventListener('click', function () {
    timer = false;
});
document.getElementById("button3").addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("div1").innerHTML="00 : 00 : 00"
}); 
function stopWatch() {
    if (timer) {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        if (hour < 10) {
            hrString = "0" + hrString;
        }
        if (minute < 10) {
            minString = "0" + minString;
        }
        if (second < 10) {
            secString = "0" + secString;
        }
        document.getElementById('div1').innerHTML = `${hrString} : ${minString} : ${secString}`;
        setTimeout(stopWatch, 10);
    }
}

