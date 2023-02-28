let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;

let time = false;



function start() {
    time = true;
    stopwatch();
}
function pause() {
    time = false;
}
function reset() {
    time = false;
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('ms').innerHTML = "00";

}
function cast() {
 let casts=[];
 const castsContainer = document.querySelector('.casts');
 casts.push(stopwatch());
  const castIndex = casts.length;
  const castTime = stopwatch();
  const castItem = document.createElement('div');
  castItem.textContent = `CAST ${castIndex} - ${castTime}`;
  castsContainer.appendChild(castItem);

}

function stopwatch() {

    if (time === true) {
        ms = ms + 1;
        if (ms == 100) {
            sec = sec + 1;
            ms = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        let hrdouble = hr;
        let mindouble = min;
        let secdouble = sec;
        let msdouble = ms;

        if (hr < 10) {
            hrdouble = "0" + hrdouble;
        }
        if (min < 10) {
            mindouble = "0" + mindouble;
        }
        if (sec < 10) {
            secdouble = "0" + secdouble;
        }
        if (ms < 10) {
            msdouble = "0" + msdouble;
        }

        document.getElementById('hr').innerHTML = hrdouble;
        document.getElementById('min').innerHTML = mindouble;
        document.getElementById('sec').innerHTML = secdouble;
        document.getElementById('ms').innerHTML = msdouble;
        setTimeout("stopwatch()", 10);
    }
}