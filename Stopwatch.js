var startButton = document.getElementById("start-btn");
var stopButton = document.getElementById("stop-btn");
var resetButton = document.getElementById("reset-btn");
var hour = document.getElementsByClassName('text')[0];
var minutes = document.getElementsByClassName('text')[1];
var seconds = document.getElementsByClassName('text')[2];
var millisec = document.getElementsByClassName('text')[3];


var hr = 0;
var min = 0;
var sec = 0;
var milsec = 0;
var timer = false; 


startButton.addEventListener('click', startWatch);
resetButton.addEventListener('click', resetWatch);
stopButton.addEventListener('click', stopWatch);


function startWatch(){
    timer = true;
    mainWatch();
}

function stopWatch(){
    timer = false;
}

function resetWatch(){
    hr = 0;
    min = 0;
    sec = 0;
    milsec = 0;
    
    timer = false;
    
    millisec.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hour.innerHTML = "00";
}

function mainWatch(){
    if(timer == true){
        milsec = milsec + 1;
        if(milsec == 100){
            sec = sec + 1;
            milsec = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
        }
        
        
        setTimeout(mainWatch, 10);
        millisec.innerHTML = milsec;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
        hour.innerHTML = hr;
    }
}
