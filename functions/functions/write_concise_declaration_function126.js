// Write concise Declaration Functions

// An object can contain a function


const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};



bicycle.setGear(3);

console.log(bicycle.gear); // This will print out 3

//---------------------------------------

const bike = {
    wheel: 4,
    setWheel(newWheel) {
        "use strict";
        this.wheel = newWheel
    }

};

bike.setWheel(2);

console.log(bike.wheel); // This will print out 2

// Both of these are the same way to do the function but written differently