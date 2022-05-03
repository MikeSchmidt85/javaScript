// Bracket Notation to Find the Last Character in String 

//Example
var lastLetterOfFirstName = "";
var firstName = "Mike";

lastLetterOfFirstName = firstName[firstName.length - 1]

// All strings start with an index of 0, not 1
// To get the last letter you put what you want to use (firstName) then you have to find the index, in this case it would be (firstName.length -1) 
// You get the entire length of the world and minus 1, because the index starts at 0, the length of the word will be longer then the index

// Word = Mike, length : 4
// Last letter is the Mike is at index 3, refer to line 9 for help

//Setup
var lastLetterOfLastName = "";
var lastName ="Schmidt";

// Only change code below this line

lastLetterOfLastName = lastName[lastName.length - 1]

console.log(lastLetterOfFirstName)
console.log(lastLetterOfLastName)