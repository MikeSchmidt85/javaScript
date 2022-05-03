// Destructuring Assignment with Nested Objects

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}

};

function getMaxTmrw(forecast) {
    "use strict";

    // const maxOfTomorrrow = undefined; // Change this line
    const {tomorrow: {max: maxOfTomorrrow}} = forecast;

    return maxOfTomorrrow;

}

console.log(getMaxTmrw(LOCAL_FORECAST)); // This will print out 84.6 which is the max of tomrrow