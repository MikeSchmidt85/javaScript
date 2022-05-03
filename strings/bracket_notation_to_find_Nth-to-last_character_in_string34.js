// Bracket Notation tofind Nth-to-last Character in String

//Example
var secondToLastLetterOfFirstName = "";
var firstName = "Mike";

secondToLastLetterOfFirstName = firstName[firstName.length - 2]

// All strings start with an index of 0, not 1
// To get the Nth letter you put what you want to use (firstName) then you have to find the index, in this case it would be (firstName.length -2) 
// You get the entire length of the world and minus 2, because the index starts at 0, the length of the word will be longer then the index

// Word = Mike, length : 4
// Last letter is the Mike is at index 3, refer to line 9 for help

//Setup
var lastLetterOfLastName = "";
var lastName ="Schmidt";

// Only change code below this line

fourthToLastLetterOfLastName = lastName[lastName.length - 4]

console.log(secondToLastLetterOfFirstName)
console.log(fourthToLastLetterOfLastName)