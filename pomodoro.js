var timer = 25;
var studyTimer = 25;
var breakTimer = 5;

const MS_PER_MIN = 60000;

var CURRENT_TIME_IN_MS;
var target;
var remainingMilliseconds;
var timeOffset;
var currentTime;

var intervalId;
var pauseBool = false;

var state = 0; // 0 = study, 1 = break
// var newTarget;

// var newRemainingMilliseconds;
// var newRenamingSeconds;
// var newRenamingMinutes;

function startTimer() {
    currentTime = new Date().getTime();
    timeOffset = MS_PER_MIN * timer;
    target = new Date(currentTime + timeOffset).getTime();
    countdown();
    intervalId = setInterval(countdown, 1000);
    // if (remainingMilliseconds === 0) {
    //     clearInterval(intervalId);
    //     alert('Time\'s Up!');
    // } else {
    //     intervalId = setInterval(countdown, 1000);
    // }
};

function resumeTimer() {
    currentTime = new Date().getTime();
    timeOffset = remainingMilliseconds;
    target = new Date(currentTime + timeOffset).getTime();
    remainingCountdown();
    intervalId = setInterval(remainingCountdown, 1000);
};

function pauseTimer() {
    // if (!pauseBool) {
        // PAUSED
        // clearInterval(intervalId);
        // document.getElementById('pause').innerHTML = 'Resume';
        // pauseBool = true;
    // } 
    // else {
    //     setInterval(remainingCountdown, 1000);
    //     document.getElementById('pause').innerHTML = 'Pause'
    //     pauseBool = false;
    // }
    // alert('paused!');

    remainingMilliseconds = remainingMilliseconds;
    clearInterval(intervalId);
    // document.getElementById('pause').innerHTML = 'Resume';
    pauseBool = true;
}

function remainingCountdown() {
    currentTime = new Date().getTime();
    remainingMilliseconds = target - currentTime;

    // Milliseconds to seconds conversion: 
    remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

    // Seconds to minutes conversion:
    remainingMinutes = Math.floor(remainingMilliseconds / 60000);

    // Minutes to hours conversion:
    document.getElementById('timer').innerHTML = remainingMinutes + ' : ' + remainingSeconds;
}

function countdown() {
    if (remainingMilliseconds < 0) {
        clearInterval(intervalId);
        alert('Study Time\'s Up!');
        state = 1;
        // breakCountdown();

        currentTime = new Date().getTime();
        timeOffset = MS_PER_MIN * breakTimer;
        target = new Date(currentTime + timeOffset).getTime();
        breakCountdown();
        intervalId = setInterval(breakCountdown, 1000);
        // setInterval(breakCountdown(), 1000);
    } else {
        currentTime = new Date().getTime();
        remainingMilliseconds = target - currentTime;

        // Milliseconds to seconds conversion: 
        remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

        // Seconds to minutes conversion:
        remainingMinutes = Math.floor(remainingMilliseconds / 60000);

        // Minutes to hours conversion:
        document.getElementById('timer').innerHTML = remainingMinutes + ' : ' + remainingSeconds;
    }
     
    // currentTime = new Date().getTime();
    // remainingMilliseconds = target - currentTime;

    // // Milliseconds to seconds conversion: 
    // remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

    // // Seconds to minutes conversion:
    // remainingMinutes = Math.floor(remainingMilliseconds / 60000);

    // // Minutes to hours conversion:
    // document.getElementById('timer').innerHTML = remainingMinutes + ' : ' + remainingSeconds;
}

function breakCountdown() {
    currentTime = new Date().getTime();
    remainingMilliseconds = target - currentTime;

    // Milliseconds to seconds conversion: 
    remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

    // Seconds to minutes conversion:
    remainingMinutes = Math.floor(remainingMilliseconds / 60000);

    // Minutes to hours conversion:
    document.getElementById('timer').innerHTML = remainingMinutes + ' : ' + remainingSeconds;
}

function startTimerAdd() {
    studyTimer++;
    timer++;
    document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    document.getElementById('timer').innerHTML = timer + ':' + '00';
}

function startTimerAddFive() {
    studyTimer+= 5;
    timer+= 5;
    document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    document.getElementById('timer').innerHTML = timer + ':' + '00';
}

function startTimerSub() {
    studyTimer--;
    timer--;
    document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    document.getElementById('timer').innerHTML = timer + ':' + '00';
}

function startTimerSubFive() {
    studyTimer-= 5;
    timer-= 5;
    document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    document.getElementById('timer').innerHTML = timer + ':' + '00';
}

function breakTimerAdd() {
    breakTimer++;
    document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}

function breakTimerAddFive() {
    breakTimer+=5;
    document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}

function breakTimerSub() {
    breakTimer--;
    document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}

function breakTimerSubFive() {
    breakTimer-=5;
    document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}