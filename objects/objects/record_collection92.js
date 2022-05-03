// Record Collection 

// SETUP

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        'tracks': [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));  // This is just a fancy way of making a copy of the above list

// Only change code below this line

function updateRecords(id, prop, value) {
    if(value === "" ){
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}


console.log(updateRecords(5439, "artist", "ABBA")); // This will print the collection list but updated with what we add in here
console.log(updateRecords(2468, "tracks", "test")); // This will print the collection list but updated with what we add in here