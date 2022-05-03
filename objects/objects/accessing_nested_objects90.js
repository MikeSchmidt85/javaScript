//  Accessing Nested Objects

// SETUP

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

console.log(gloveBoxContents); // This will print whats in the gloveBox which is maps