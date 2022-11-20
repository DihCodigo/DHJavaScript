let sec = 0;
let min = 0;
let hr = 0;

let intervail;


function twoDigits(digit){
    if(digit < 10) {
        return ('0' +digit)
    }else {
        return (digit);
    }
}

function start() {
    intervail = setInterval(counter, 1000)
}

function pausar() {
    clearInterval(intervail);
}

function resetar() {
    clearInterval(intervail);
    sec=0;
    min=0;
    document.getElementById('contador').innerText = '00:00:00';
}


function counter() {
    console.log('foi!!');
    sec++;
    if(sec==60){
        min++;
        sec = 0;
        if(min == 60){
            min = 0;
            hr++;
        }
    }
    document.getElementById('contador').innerText = hr +  ':' + min  + ':' + sec ;
}