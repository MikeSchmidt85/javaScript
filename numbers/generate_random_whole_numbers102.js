// Generate Ransom Whole Number

var randomNumberBetween0And19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10); // This will choose a random whole number between 0-9
                                           // The Math.floor rounds the number down to the nearest whole number

}

console.log(randomWholeNum()); // This will print out a random whole number between 0 and 9