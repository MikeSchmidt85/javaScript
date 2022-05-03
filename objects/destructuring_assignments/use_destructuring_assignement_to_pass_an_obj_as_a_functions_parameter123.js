// Use Destructuring Assignment to Pass an Object as a Function's Parameter

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    medium: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85

};

const half1 = (function() {
    return function half(stats) {
        return(stats.max + stats.min) / 2.0;
    
    };

})();

const half2 = (function() {
    return function half({max, min}) { // these are changed from the "stats" object to what we need to use, just the max and the min
        return(max + min) / 2.0; // We also remove the stats. from both cause we dont need to access them anymore, since we removed "stats" on line 22
    
    };

})();
console.log(stats); // This will print the entire object
console.log(half1(stats)); // This will print out stats divided by half
console.log(half2(stats)); // This will also print out stats divided by half