// Use the Spread Operator to Evaluate Arrays In-Place

const arr1= [ "JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    // arr2 = arr1; // Change this line, this will change JAN to potato, however if we add in the spread operator it will keep it the same and not change it to potato
    // This is making arr2 equal to the content inside of arr1, not equl to the actual arr1 but the content inside
    arr2 = [...arr1]
    arr1[0] = "potato"
})();
console.log(arr2); // This will print out [ "JAN", "FEB", "MAR", "APR", "MAY"]