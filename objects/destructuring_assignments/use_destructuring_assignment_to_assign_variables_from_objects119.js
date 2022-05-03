// Use Destructuring Assignment to Assign Varibles from Objects

var voxel = {x: 3.6, y: 7.4, z: 6.54};


// This is the old way of assigning each individual variables
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// The distructuring syntax (quicker then the above code)
const {x: a, y: b, z: c} = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURE = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTomorrow(avgTemperatures) {
    "use strict"

    // Change code below this line
    // const tempOfTomorrow = undefined // Cahnge this line ↓↓↓
    const {tomorrow : tempOfTomorrow} = avgTemperatures
    // Change code above this line

    return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMPERATURE)); // Should be 79, which is prints out 79