// Iterate with Document... While Loops 

// SETUP

var myArray = [];
var i = 10;

// Only change code below this line


// Changing this to a Do While loop ↓↓

/* while(i < 5) {
     myArray.push(i);
     i++
}
*/

// The loop is run first then after it checks the while part

do {
    myArray.push(i);
    i++;
} while(i < 5)

console.log(i, myArray); // This will print out 11 first then the array which is [10]