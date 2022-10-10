function checks() {
    counterBulls = 0;
    counterCows = 0;
    let numberToGuess = '8326';     // used for debugging
    let userNum = 1234;      //used for debugging
    let buffer = '';
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
    if (counterBulls > 0) {
        if (counterCows > 0) {
            animals = `${userNum} B - ${counterBulls}; C - ${counterCows}`;
            buffer += `${animals}<br>`;
            console.log(`console - ${buffer} B - ${counterBulls}; C - ${counterCows}`);
            //document.getElementById("answer").innerHTML = `${buffer} B - ${counterBulls}; C - ${counterCows}`;
        } else {
            animals = `${userNum} B - ${counterBulls};`;
            buffer += `${animals}<br>`;
            console.log(`console - ${buffer} B - ${counterBulls}`);
            //document.getElementById("answer").innerHTML = `${buffer} B - ${counterBulls}`;
        }


    } else {
        if (counterCows > 0) {
            animals = `${userNum} C - ${counterCows}`;
            buffer += `${animals}<br>`;
            // document.getElementById("answer").innerHTML = `${buffer} C - ${counterCows}`;
            console.log(`console - ${buffer} C - ${counterCows}`);
        } else {
            animals = `${userNum}`;
            buffer += `${animals}<br>`;
            // document.getElementById("answer").innerHTML = `${buffer}`;
            console.log(`console - ${buffer}`);
        }

    }
}
//checks()



function generateNumber() {
    let firstDigit = randomNum(1, 9);
    let secondDigit = second(0, 11);
    let thirdDigit = third(0, 11);
    let fourthDigit = fourth(0, 11);
    numberToGuess = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
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
generateNumber() 

function gen() {
    let firstDigit = Math.ceil(Math.random() * (9 - 1) + 1);
    let secondDigit = Math.floor(Math.random() * (11 - 0) + 0);
    while(secondDigit === firstDigit){
        secondDigit = Math.floor(Math.random() * (11 - 0) + 0);
    }
    let thirdDigit = Math.floor(Math.random() * (11 - 0) + 0);
    while(thirdDigit === firstDigit && thirdDigit === secondDigit){
        thirdDigit = Math.floor(Math.random() * (11 - 0) + 0);
    }
    let fourthDigit = Math.floor(Math.random() * (11 - 0) + 0);
    while(fourthDigit === firstDigit && fourthDigit === secondDigit && fourthDigit === thirdDigit){
        fourthDigit = Math.floor(Math.random() * (11 - 0) + 0);
    }




    console.log(firstDigit);
    console.log(secondDigit);
    console.log(thirdDigit);
    console.log(firstDigit);
}
//gen()
