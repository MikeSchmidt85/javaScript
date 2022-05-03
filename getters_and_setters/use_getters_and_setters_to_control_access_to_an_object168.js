// Use Getters and Setter to Control Access to an Object

class Book {
    constructor(author) {
        this._author = author; //_author is the private variable

    }
    // Getter

    // Getter functions are meant to return or get the vaule of an object's private varible to the user without the user directly accesing the private veriable
    get writer() {
        return this._author;
    }

    // Setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
};

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32); 
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;

}

const Thermostat = makeClass();
const thermos = new Thermostat(56);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp) // this will print out 26