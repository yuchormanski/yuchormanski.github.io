let numberToGuess;
let userNum;
function generateNumber() {
    let firstDigit = randomNum(1, 9);
    let secondDigit = second(0, 11);
    let thirdDigit = third(0, 11);
    let fourthDigit = fourth(0, 11);
    numberToGuess = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;

    //Hide from browser console
    console.log(numberToGuess);

    //generate first digit
    function randomNum(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
    //generate second digit excluding first
    function second(min, max) {
        let num = Math.floor(Math.random() * (max - min) + min);
        if (num === 10) {
            num = 0;
        }
        return (num === firstDigit) ? second(min, max) : num;
    }
    //generate third digit excluding first and second
    function third(min, max) {
        let num = Math.floor(Math.random() * (max - min) + min);
        if (num === 10) {
            num = 0;
        }
        return (num === firstDigit || num === secondDigit) ? third(min, max) : num;
    }

    //generate fourth digit excluding first, second and third
    function fourth(min, max) {
        let num = Math.floor(Math.random() * (max - min) + min);
        if (num === 10) {
            num = 0;
        }
        return (num === firstDigit || num === secondDigit || num === thirdDigit) ? fourth(min, max) : num;
    }
}

// User Input
buffer = '';
let counter = 0;
function getUserInput() {
    // TODO: check if user add something different except numbers 
    userNum = document.getElementById("userInput").value;
    if (numberToGuess === userNum) {
        let ok = `You guess the number!<br><span class="numberColor">${numberToGuess}</span><br>You did it after ${counter} attempts`
        document.getElementById("userGuess").innerHTML = ok;
        document.getElementById("newGame").innerHTML = '<a href class="loadNew" id="" type="button" onclick="document.location.reload(true)">New Game</a>';
        console.log(`OK`);
    } else {
        return checks()
    }
    return userNum;
}

function checks() {
    counterBulls = 0;
    counterCows = 0;
    // let numberToGuess = '1759';      used for debugging
    // let userNum = 1759;      used for debugging
    //let buffer = '';
    // buffer = userNum;        used for debugging  
    //buffer += `${userNum}<br>`
    userNum = userNum.toString();

    for (let i = 0; i < numberToGuess.length; i++) {
        let currentDigit = numberToGuess[i];

        for (let j = 0; j < userNum.length; j++) {
            let userDigit = userNum[j]
            if (currentDigit === userDigit && i === j) {
                counterBulls++;
                break;
            } else if (currentDigit === userDigit) {
                counterCows++;
            }
        }
    }
    let animals = '';
    counter++;

    if (counterBulls > 0) {
        if (counterCows > 0) {
            animals = `${userNum} - Bulls - ${counterBulls}; Cows - ${counterCows}`;
            buffer += `${animals}<br>`;
            console.log(`console - ${buffer} - Bulls - ${counterBulls}; Cows - ${counterCows}`);
            document.getElementById("answer").innerHTML = `${buffer}`;
        } else {
            animals = `${userNum} Bulls - ${counterBulls};`;
            buffer += `${animals}<br>`;
            console.log(`console - ${buffer} - Bulls - ${counterBulls}`);
            document.getElementById("answer").innerHTML = `${buffer}`;
        }


    } else {
        if (counterCows > 0) {
            animals = `${userNum} - Cows - ${counterCows}`;
            buffer += `${animals}<br>`;
            document.getElementById("answer").innerHTML = `${buffer}`;
            console.log(`console - ${buffer} - Cows - ${counterCows}`);
        } else {
            animals = `${userNum}`;
            buffer += `${animals}<br>`;
            document.getElementById("answer").innerHTML = `${buffer}`;
            console.log(`console - ${buffer}`);
        }

    }
}