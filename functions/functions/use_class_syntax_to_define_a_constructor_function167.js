// Use Class Syntax to Define a Constructor Function 

/*

var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var Mike = new SpaceShuttle("Neptune");

console.log(Mike.targetPlanet);

*/

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var Mike = new SpaceShuttle("Neptune");

console.log(Mike.targetPlanet); // This will print out Neptune

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
    
}
    const Vegetable = makeClass();
    const carrot = new Vegetable("carrot");
    console.log(carrot.name)  // This will print out carrot