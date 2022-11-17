
// Once our content is loaded, do the following
document.addEventListener('DOMContentLoaded', () => {
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const buttons = document.querySelectorAll('.timerButton');

    // add event listeners to buttons
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === 'Start') {
                startTimer();
            }
            else if (e.target.innerHTML === 'Pause') {
                pauseTimer();
            }
            else if (e.target.innerHTML === 'Reset') {
                resetTimer();
            }
        })
    })

    let running = false;

    const countdown = function () {
        // invoke countdown recursively every second
        const timeoutID = setTimeout(countdown, 1000);
        
        // store current time as numbers
        let minAsNum = Number(minutes.innerHTML);
        let secAsNum = Number(seconds.innerHTML);

        // decrement logic
        // base case: if minutes = 0 AND seconds = 0, return invocation of pauseTimer and maybe ensue king chaos
        if ((minAsNum === 0 && secAsNum === 0) || running === false) {
            return pauseTimer(timeoutID);
        }
        // recursive case 1: else if seconds = 0, decrement minutes and reset seconds to 59
        else if (secAsNum === 0) {
            minAsNum--;
            secAsNum = 59;
        }
        // recursive case 2: decrement seconds
        else {
            secAsNum--;
        }
        // reassign the innerHTML and keep leading 0 format
        minutes.innerHTML = padNumber(minAsNum);
        seconds.innerHTML = padNumber(secAsNum);
    };

    // create number padding function to keep leading 0's
    const padNumber = function(num) {
        num = num.toString();
        while (num.length < 2) num = "0" + num;
        return num;
    }

    const startTimer = function () {
        if (running) return;
        running = true;
        setTimeout(countdown, 1000);
    }

    const pauseTimer = function (timeoutID) {
        running = false;
        return clearTimeout(timeoutID);
    };

    const resetTimer = function () {
        minutes.innerHTML = '25';
        seconds.innerHTML = '00';
        return running = false;
    };

    const ensueChaos = function () {

    };


});

