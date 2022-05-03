// Global vs. Local Scope Functions 

// It is possible to have local and global variables with the same name
// When done this way the local variable takes precedent over the global

var outerWear = "T-Shirt"; // This is a global variable because it is outside the function

function myOutfit() {
    var outerWear = "Sweater"

    return outerWear;
}

console.log(myOutfit()); // This refers to the function so it prints "Sweater" (Even though there are two outwear variables)
console.log(outerWear);  // This refers to the global variable so it prints "T-Shirt"