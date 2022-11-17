
// Once our content is loaded, do the following
document.addEventListener('DOMContentLoaded', () => {
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const buttons = document.querySelectorAll('.timerButton');
    const body = document.querySelector('body');

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
    let bodySetFirst = true;

    const countdown = function () {
        // invoke countdown recursively every second
        const timeoutID = setTimeout(countdown, 1000);
        
        // store current time as numbers
        let minAsNum = Number(minutes.innerHTML);
        let secAsNum = Number(seconds.innerHTML);

        // decrement logic
        // base case: if minutes = 0 AND seconds = 0, return invocation of pauseTimer and maybe ensue king chaos
        if ((minAsNum === 0 && secAsNum === 0) || running === false) {
            body.removeAttribute('class');
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
        ensueChaos(minAsNum, secAsNum);
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
        minutes.innerHTML = '01';
        seconds.innerHTML = '05';
        body.removeAttribute('class');
        return running = false;
    };

    const trivia = ["Crayola came from the words for 'oily chalk'.",
    "John Quincy Adams was an avid skinny-dipper. His regular exercise regimen included dips in the Potomac River.",
    "The metal bit at the end of a pencil that holds the eraser in place is called a ferrule.",
    "Baby porcupines are known as porcupettes.",
    "The first Macy's Thanksgiving Day Parade featured lions, camels, and elephants from the Central Park Zoo.",
    "According to a poll of 11,000 Americans, 84 percent of vegetarians and vegans return to eating meat.",
    "Goosebumps are actually caused by a muscle. It is called the arrector pili muscle.",
    "Wisdom teeth serve no purpose. They're left over from hundreds of thousands of years ago. As early humans' brains grew bigger, it reduced space in the mouth, crowding out this third set of molars.",
    "It's illegal to own just one guinea pig in Switzerland. It's considered animal abuse because they're social beings and get lonely.",
    "Army ants that misinterpret the scent trails left by other ants will sometimes break from the crowd and march in circles. If enough ants join, they can form massive 'death spirals'.",
    "The heads on Easter Island have bodies.",
    "The corpse flower was the official flower of the Bronx for 60 years.",
    "The Vatican's bank is the only one in existence that allows ATM users to perform transactions in Latin.",
    "The modern popped collar originated as a way to keep tennis players' necks from getting sunburnt.",
    "The word PEZ comes from the German word for peppermint—PfeffErminZ.",
    "On Good Friday in 1930, the BBC reported, 'There is no news.' Instead, they played piano music.",
    "North Korea's 105-story Ryugyong Hotel, nicknamed 'The Hotel of Doom,' is the world's tallest unoccupied building.",
    "According to a 2010 study, people fluent in multiple languages almost always swear in their native tongue.",
    "The medical term for ice cream headaches is sphenopalatine ganglioneuralgia.",
    "The Starry Night depicts Vincent Van Gogh's view from the Saint Paul-de-Mausole asylum.",
    "Andrew Jackson's parrot was kicked out of his funeral for swearing.",
    "Female bats give birth while hanging upside down, catching the baby in their wings as it drops.",
    "Staff members of the Slovak and Slovenian embassies meet once a month to exchange incorrectly addressed mail.",
    "Double Stuf Oreos are only 1.86 times as 'stuf'ed' as classic Oreos.",
    'The heart of a shrimp is located in its head. They also have an open circulatory system, which means they have no arteries and their organs float directly in blood.',
    'The unicorn is the national animal of Scotland.',
    'Nutmeg is a hallucinogen. The spice contains myristicin, a natural compound that has mind-altering effects if ingested in large doses.',
    'In 2014, there was a Tinder match in Antarctica. Two research scientists matched on the global dating app in the most remote part of the world - a man working at the United States Antarctic McMurdo Station and a woman camping a 45-minute helicopter ride away. What are the chances?!',
    'The Japanese word Kuchi zamishi is the act of eating when you\'re not hungry because your mouth is lonely. We do this all the time.',
    'Pigeons can tell the difference between Picasso and Monet. What?! A 1995 study shows that the birds can differentiate between the two artists.'
    ]

    const ensueChaos = function (min, sec) {
        const randomNum = Math.floor(Math.random() * trivia.length);
        if (min === 0 && sec % 10 === 0) {
            console.log(randomNum);
            alert(trivia[randomNum]);
        }

        if (sec === 53) {
            alert("QUICK! SAY THIS TONGUE TWISTER AS FAST AS YOU CAN!");
            alert(`Betty Botter bought some butter,\n
            But she said the butter's bitter,\n
            If I put it in my batter,\n
            it will make my batter bitter,\n
            But a bit of better butter will make my batter better\n
            So 'twas better Betty Botter bought a bit of better butter`);
        }

        if (sec === 47) {
            const promptValue = prompt("Which team actually won the relay race?");
            if (promptValue.toLowerCase() === 'blue') {
                prompt("WRONG! Try again. Hint: Any team but blue.")
            }
        }

        if (sec === 36) {
            alert("SHHHHHHH! We've been trying to reach you concerning your car's extended warranty.")
        }

        if (min === 0 && sec <= 25 && bodySetFirst) {
            body.setAttribute('class', 'blink-bg');
            bodySetFirst = false;
        }

        if (sec === 8) {
            alert("Press OK if Greg and Nathan should win at least 3rd place for the hackathon! Thanks (-:")
        }
    }; 


});

