// Default Optioj in Switch Statemtents

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;              // You need to have the break here or it will skip over the previous answer
        case "b":
            answer = "bird";
            break;              // You need to have the break here or it will skip over the previous answer
        case "c":
            answer = "cat";
            break;              // You need to have the break here or it will skip over the previous answer
        default:
            answer = "stuff"    // So if your trying to pring out something thats not there you use default always
            break;              // You need to have the break here or it will skip over the previous answer
    }

    return answer;
}

// Change this value to test

console.log(switchOfStuff(2)); // This will print out stuff, this automatically goes to the default cause there isnt a value of 22
console.log(switchOfStuff("a")); // This will print out apple
console.log(switchOfStuff("Hello")); // This will print out stuff, this automatically goes to the default cause there isnt a vaule for "Hello"
console.log(switchOfStuff("c")); // This will print out cat