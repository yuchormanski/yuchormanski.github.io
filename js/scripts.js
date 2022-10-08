function generateNumber() {
    let firstDigit = randomNum(1, 9);
    let secondDigit = randomNum(1, 9);
    let thirdDigit = randomNum(1, 9);
    let fourthDigit = randomNum(1, 9);
    let numberToGuess =`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
    console.log(numberToGuess);


    function randomNum(min, max) {
        return Math.ceil(Math.random() * (max - min) + min);
    }

}
generateNumber()