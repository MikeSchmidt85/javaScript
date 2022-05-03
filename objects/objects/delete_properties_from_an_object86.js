// Delete Properties From an Object

var ourDog = {
    "Name": "Richard",
    "Legs": 4,
    "Tails": 1,
    "Friends": ["Bertha", "Lancome"],
    "Bark": "Screech"

};

delete ourDog.Bark

console.log(ourDog);

var myDog = {
    "Name": "Dolphin",
    "Legs": 2,
    "Tails": 3,
    "Friends": [],
    "Bark": "EEEEEEEEE"
}

delete myDog.Legs

console.log(myDog);