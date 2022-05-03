// Testing Objects for Properties

// SETUP

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"

};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)) { // So if the hasOwnProperty has a checkProp it will return that value
        return myObj[checkProp];
    } else {                            // Hoever if there isnt one it prints out Not Found!
        return "Not Found!";
    }
}

// Test your code by modifying these values

console.log(checkObj("gift")); // This prints out pony
console.log(checkObj("pet")); // This prints out kitten
console.log(checkObj("bed")); // This prints out sleigh
console.log(checkObj("Hello")); // This prints out Not Found! (There is no variable called "Hello")