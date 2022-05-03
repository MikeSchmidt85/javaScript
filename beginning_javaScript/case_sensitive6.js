// Case Sensitivity in Variables

// Variable names and function names in JavaSript are case sensitive

// Declaration

var StUdLyCapVaR; // Proper camel case should be:
var studlyCapVar // The first letters are lower case however ever word after the first letter is cpitalized
var properCamelCase; //This one is correct
var TitleCaseOver; //This should be:
var titleCaseOver

// Assignment
//Correct these:

STUDLYCAPVAR = 10; //This should be:
studlyCapVar = 10;
ProperCAmelCAse = "A String"; //This should be:
properCamelCase = "A String";
tITLEcASEoVER = 9000 //This should be:
titleCaseOver = 9000

// Even though variable names may be spelled the same, they are case sensitive
// Example above: they dont match up so an error will occur

console.log(studlyCapVar)
console.log(properCamelCase)
console.log(titleCaseOver)
