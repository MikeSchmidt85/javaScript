// Accessing Nested Arrays 

// SETUP

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "dandelions"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
// This will pull from myPlants: It goes to the first index which is trees then goes to the list at index 1 which is pine

console.log(secondTree); // This will print pine