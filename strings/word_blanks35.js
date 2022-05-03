// Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";  //This is sending the result to the return result on line 10
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."; //This is added to the line above to line 5
    // youre adding the variables from wordBlanks to create a madlib
    //
    // Your code abover this line
    return result; //This returns what was sent here to be console.logged
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly")); //These lines are matched from the above function onj line 3
console.log(wordBlanks("bike", "slow", "flew", "slowly"));