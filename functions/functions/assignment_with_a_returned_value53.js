// Assignment with a Returned Value 

// Example 1:

var changed = 0; // Initial value given for "changed" (first)

function change(num) { //The function runs and our output in 5; as 10 + 5 = 15, 15 / 3 = 5 (third)
    return (num + 5) / 3;

}

changed = change(10); //Changed becomes 10 as its reassigned here and that number is plugged in to the function change (second)


console.log(changed); // This prints out the answer 5 (fourth)

// Example 2:

var processed = 0; // Initial value given for "processed" (first)

function processArgument(num) { //The function runs and our output in 10.6; as 50 + 3 = 53, 53 / 5 = 10.6 (third)
    return (num + 3) / 5;
}

processed = processArgument(50); //Changed becomes 50 as its reassigned here and that number is plugged in to the function change (second)

console.log(processed); // This prints out the answer 10.6 (fourth)