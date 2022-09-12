//Globalne varijable

const time_el = document.querySelector(".appi .time");
const start_btn = document.getElementById("start");
const reset_button = document.getElementById("reset");
const pause_button = document.getElementById("pause");

let seconds = 0;
let interval = null;


//Event listeners


start_btn.addEventListener('click', start);
reset_button.addEventListener('click', reset);
pause_button.addEventListener('click', pause)



//Update timer
function timer(){
    seconds++;

    //Format our time

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds-(hours*3600))/60);
    let secs = seconds % 60;

    if(secs < 10){
        secs = '0' + secs;
    }
    
    
    if(mins < 10){
        mins = '0' + mins;
    }

    
    if(hours < 10){
        hours = '0' + hours;
    }

    time_el.innerText = `${hours}:${mins}:${secs}`;
}

function start(){
    if (interval){
        return
    }

    interval = setInterval(timer,1000);
}

function pause(){
    clearInterval(interval);
    interval=null;
    
}

function reset(){
    pause();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

