// Using Objects for Lookups 

// SETUP

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };

    result = lookup[val];
    return result;

    // We delete this switch function below and replace it with the above object
    // We save lines and its much easier to write
    // Lines 8-15 are the same as lines 26-45

    // Only change code below this line

    // switch(val) {
    //     case "alpha":
    //         result = "Adams";
    //         break;
    //     case "bravo":
    //         result = "Boston";
    //         break;
    //     case "charlie":
    //         result = "Chicago";
    //         break;
    //     case "delta":
    //         result = "Denver";
    //         break;
    //     case "echo":
    //         result = "Easy";
    //         break;
    //     case "foxtrot":
    //         result = "Frank";
    //         break;
    // }
}

console.log(phoneticLookup("charlie")); // This will print out Chicago
console.log(phoneticLookup("foxtrot")); // This will print out Frank
console.log(phoneticLookup("bravo")); // This will print out Boston
console.log(phoneticLookup("alpha")); // This will print out Adams
console.log(phoneticLookup("delta")); // This will print out Denver