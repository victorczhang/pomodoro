var timer = 25;
var studyTimer = 25;
var breakTimer = 5;

const MS_PER_MIN = 60000;

// var CURRENT_TIME_IN_MS;
var target;

var remainingMilliseconds;
var remainingBreakMilliseconds;

var remainingTimeInSeconds;

var timeOffset;
var currentTime;

var intervalId;

var state = 0; // 0 = study, 1 = break, 2 = initial state
var pauseBool = false;
var playClicked = 0;


function startTimer() {
    if (state == 0) {
        remainingTimeInSeconds = undefined;

        document.getElementById('timer-label').innerHTML = 'Study';
        timeOffset = MS_PER_MIN * studyTimer;
        currentTime = new Date().getTime();
        // timeOffset = MS_PER_MIN * studyTimer;
        target = new Date(currentTime + timeOffset).getTime();

        intervalId = setInterval(countdown, 1000);
    } else if (state == 1) {
        remainingTimeInSeconds = undefined;

        document.getElementById('timer-label').innerHTML = 'Study';
        timeOffset = MS_PER_MIN * breakTimer;
        currentTime = new Date().getTime();
        // timeOffset = MS_PER_MIN * studyTimer;
        target = new Date(currentTime + timeOffset).getTime();

        intervalId = setInterval(countdown, 1000);
    }

    // document.getElementById('timer-label').innerHTML = 'Study';
    // timeOffset = MS_PER_MIN * studyTimer;
    // currentTime = new Date().getTime();
    // // timeOffset = MS_PER_MIN * studyTimer;
    // target = new Date(currentTime + timeOffset).getTime();

    // intervalId = setInterval(countdown, 1000);

    playClicked = 1;
};

function resumeTimer() {
    currentTime = new Date().getTime();
    timeOffset = remainingMilliseconds;
    target = new Date(currentTime + timeOffset).getTime();
    remainingCountdown();
    intervalId = setInterval(remainingCountdown, 1000);
};

function pauseTimer() {
    remainingMilliseconds = remainingMilliseconds;
    if (pauseBool == true && playClicked == 1) {
        resumeTimer();
        document.getElementById('pause').innerHTML = 'Pause';
        pauseBool = false;
    }
    else if (pauseBool == false && playClicked == 1) {
        clearInterval(intervalId);
        document.getElementById('pause').innerHTML = 'Resume'
        pauseBool = true;
    } 
}

function remainingCountdown() {
    currentTime = new Date().getTime();
    remainingMilliseconds = target - currentTime;

    // Milliseconds to seconds conversion: 
    remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

    // Seconds to minutes conversion:
    remainingMinutes = Math.floor(remainingMilliseconds / 60000);

    // Minutes to hours conversion:
    if (remainingSeconds < 10) {
        document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
    } else {
        document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
    }
}

function countdown() {
    // Study Timer:
    if (state == 0) {
        if (remainingTimeInSeconds == 0) {
                // clearInterval(intervalId);
                state = 1;
                startTimer();
        } else {
                document.getElementById('timer-label').innerHTML = 'Study';
                currentTime = new Date().getTime();
                remainingMilliseconds = target - currentTime;

                remainingTimeInSeconds = Math.floor(remainingMilliseconds / 1000);
        
                // Milliseconds to seconds conversion: 
                remainingSeconds = Math.floor(((remainingMilliseconds % 360000) % 60000) / 1000);
        
                // Seconds to minutes conversion:
                remainingMinutes = Math.floor((remainingMilliseconds % 3600000) / 60000);
        
                // Minutes to hours conversion:
        
                if (remainingSeconds < 10) {
                    document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
                    // document.getElementById('timer').style.color = 'red';
                } else {
                    document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
                }

                // document.getElementById('timer').innerHTML = m + ':' + s;
            }
    // Break timer:
    } else if (state == 1) {
        if (remainingTimeInSeconds == 0) {
            // clearInterval(intervalId);
            state = 0;
            startTimer();
        } else {
            document.getElementById('timer-label').innerHTML = 'Break';
            currentTime = new Date().getTime();
            remainingBreakMilliseconds = target - currentTime;
        
            remainingTimeInSeconds = Math.floor(remainingBreakMilliseconds / 1000);
        
            // Milliseconds to seconds conversion: 
            remainingSeconds = Math.floor(((remainingBreakMilliseconds % 360000) % 60000) / 1000);
    
            // Seconds to minutes conversion:
            remainingMinutes = Math.floor((remainingBreakMilliseconds % 3600000) / 60000);
    
        
            // Minutes to hours conversion:
            if (remainingSeconds < 10) {
                document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
                // document.getElementById('timer').style.color = 'red';
            } else {
                document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
            }
        }
    } else {
        // console.log('o no');
        return;
    }
}

    
    // if (remainingMilliseconds < 1000 || remainingMilliseconds == 0) {
    //     // document.getElementById('timer').innerHTML = '0:00';
    //     clearInterval(intervalId);
    //     // state = 1;

    //     // Set variables for break countdown below: 

    //     currentTime = new Date().getTime();
    //     timeOffset = MS_PER_MIN * breakTimer;
    //     target = new Date(currentTime + timeOffset).getTime();
    //     state = 0;
        
    //     breakCountdown();
    //     intervalId = setInterval(breakCountdown, 1000);
    // } else {
    //     currentTime = new Date().getTime();
    //     remainingMilliseconds = target - currentTime;

    //     // Milliseconds to seconds conversion: 
    //     remainingSeconds = ((remainingMilliseconds % 60000) / 1000).toFixed(0);

    //     // Seconds to minutes conversion:
    //     remainingMinutes = Math.floor(remainingMilliseconds / 60000);

    //     // Minutes to hours conversion:

    //     if (remainingSeconds < 10) {
    //         document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
    //         // document.getElementById('timer').style.color = 'red';
    //     } else {
    //         document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
    //     }
    // }
// }

// function breakCountdown() {
//     if (remainingBreakMilliseconds < 1000 || remainingBreakMilliseconds == 0) {
//         clearInterval(intervalId);

//         // document.getElementById('timer-label').innerHTML = 'Study';

//         // currentTime = new Date().getTime();
//         // timeOffset = MS_PER_MIN * studyTimer;
//         // target = new Date(currentTime + timeOffset).getTime();
//         // state = 0;

//         // remainingMilliseconds = target - currentTime;

//         startTimer();
//         state = 0;
//     } else {
//         document.getElementById('timer-label').innerHTML = 'Break';
//         currentTime = new Date().getTime();
//         remainingBreakMilliseconds = target - currentTime;
    
//         // Milliseconds to seconds conversion: 
//         remainingSeconds = ((remainingBreakMilliseconds % 60000) / 1000).toFixed(0);
    
//         // Seconds to minutes conversion:
//         remainingMinutes = Math.floor(remainingBreakMilliseconds / 60000);
    
//         // Minutes to hours conversion:
//         if (remainingSeconds < 10) {
//             document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
//             // document.getElementById('timer').style.color = 'red';
//         } else {
//             document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
//         }

//     }

//     // document.getElementById('timer-label').innerHTML = 'Break';
//     // currentTime = new Date().getTime();
//     // remainingBreakMilliseconds = target - currentTime;

//     // // Milliseconds to seconds conversion: 
//     // remainingSeconds = ((remainingBreakMilliseconds % 60000) / 1000).toFixed(0);

//     // // Seconds to minutes conversion:
//     // remainingMinutes = Math.floor(remainingBreakMilliseconds / 60000);

//     // // Minutes to hours conversion:
//     // if (remainingSeconds < 10) {
//     //     document.getElementById('timer').innerHTML = remainingMinutes + ':' +  '0' + remainingSeconds;
//     //     // document.getElementById('timer').style.color = 'red';
//     // } else {
//     //     document.getElementById('timer').innerHTML = remainingMinutes + ':' + remainingSeconds;
//     // }
// }

function reset() {
    clearInterval(intervalId);
    studyTimer = 25;
    breakTimer = 5;
    timer = 25;

    document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
    document.getElementById('timer').innerHTML = timer + ':' + '00';
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
    if (studyTimer < 2) {
        return;
    } else {
        studyTimer--;
        timer--;
        document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
        document.getElementById('timer').innerHTML = timer + ':' + '00';
    }
    // studyTimer--;
    // timer--;
    // document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    // document.getElementById('timer').innerHTML = timer + ':' + '00';
}

function startTimerSubFive() {
    if (studyTimer < 6) {
        return;
    } else {
        studyTimer-= 5;
        timer-= 5;
        document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
        document.getElementById('timer').innerHTML = timer + ':' + '00';
    }
    // studyTimer-= 5;
    // timer-= 5;
    // document.getElementById('study-time').innerHTML = studyTimer + ':' + '00';
    // document.getElementById('timer').innerHTML = timer + ':' + '00';
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
    if (breakTimer < 2) {
        return;
    } else {
        breakTimer--;
        document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
    }
    // breakTimer--;
    // document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}

function breakTimerSubFive() {
    if (breakTimer < 6) {
        return;
    } else {
        breakTimer-=5;
        document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
    }
    // breakTimer-=5;
    // document.getElementById('break-time').innerHTML = breakTimer + ':' + '00';
}