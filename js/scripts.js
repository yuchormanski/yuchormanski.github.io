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
// buffer = '';
buffer = [];
let counter = 0;
function getUserInput() {
    userNum = document.getElementById("userInput").value;
    //IF user add less then four digits
    if (userNum.length < 4) {
        alert('You must add four digits!');
        return;
    }

    //IF user add different chars than numbers
    let isNumber = true;
    for (let d = 0; d < userNum.length; d++) {
        let checkForLetter = userNum[d];
        let asciiCode = checkForLetter.charCodeAt();
        if (asciiCode < 48 || asciiCode > 57) {
            isNumber = false;
            break;
        }
    }
    if (!isNumber) {
        alert('Use only numbers!');
        return;
    }

    //IF user repeat digit
    for (let i = 0; i < userNum.length; i++) {
        let digit = userNum[i];
        if (digit === userNum[i + 1]) {
            alert("Can't repeat digits!");
            return;
        }
    }

    //IF user guess the number
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

const answerField = document.querySelector('#answer');
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
            // buffer += `${animals}<br>`;
            buffer.unshift(animals);
            console.log(`console - ${buffer} - Bulls - ${counterBulls}; Cows - ${counterCows}`);
            answerField.innerHTML = `${buffer.join('<br>')}`;
        } else {
            animals = `${userNum} Bulls - ${counterBulls};`;
            // buffer += `${animals}<br>`;
            buffer.unshift(animals);
            console.log(`console - ${buffer} - Bulls - ${counterBulls}`);
            answerField.innerHTML = `${buffer.join('<br>')}`;
        }


    } else {
        if (counterCows > 0) {
            animals = `${userNum} - Cows - ${counterCows}`;
            // buffer += `${animals}<br>`;
            buffer.unshift(animals);
            answerField.innerHTML = `${buffer.join('<br>')}`;
            console.log(`console - ${buffer} - Cows - ${counterCows}`);
        } else {
            animals = `${userNum}`;
            // buffer += `${animals}<br>`;
            buffer.unshift(animals);
            answerField.innerHTML = `${buffer.join('<br>')}`;
            console.log(`console - ${buffer}`);
        }

    }
}

//theme change

const bullHead = document.querySelector('.bullHead');
const inputField = document.querySelector('#userInput');
const checkBtn = document.querySelector('.check');
let count = 0;
bullHead.addEventListener('click', changeTheme);

function changeTheme() {
    console.log(counter);
    if (counter % 2 === 0) {
        document.body.style.backgroundColor = "#1C2128";
        document.body.style.color = "#9e9e9e";
        inputField.style.backgroundColor = "#9e9e9e";
        inputField.style.color = "#1C2128";
        inputField.style.textShadow = "1px 1px 1px #e5e2e2c4";
        inputField.style.border = "1px solid rgb(195, 195, 195)";
        answerField.style.color = "#9e9e9e";
        checkBtn.style.color = "#9e9e9e"
    }
    else if (counter % 2 !== 0) {
        document.body.style.backgroundColor = 'white';
        inputField.style.backgroundColor = "";
        inputField.style.color = "";
        inputField.style.textShadow = "1px 1px 1px #8f8b8bc4";
        inputField.style.border = "1px solid rgba(0, 0, 0, 0.395)";
        answerField.style.color = "#222";
        checkBtn.style.color = "#222"

    }
    counter++
}