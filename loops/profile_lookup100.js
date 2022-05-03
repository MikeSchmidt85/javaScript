// Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0512356123",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },

    {
        "firstName": "Mike",
        "lastName": "Schmidt",
        "number": "1648953202",
        "likes": ["Pizza", "Coding", "Brownies"]
    },

    {
        "firstName": "Linda",
        "lastName": "Perez",
        "number": "2645895632",
        "likes": ["Whiskey", "The Beach", "Yoga"]
    },

    {
        "firstName": "Pauline",
        "lastName": "Schmidt",
        "number": "unknown",
        "likes": ["Pizza", "Ranch", "French Fries"]
    }

];

function lookupProfile(name, prop) {
    for(var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";
}

// Change these values to test your function

var data1 = lookupProfile("Linda", "likes"); // This will print  Linda's likes
var data2 = lookupProfile("Pauline", "lastName"); // This will print Pauline's last name
var data3 = lookupProfile("Linda", "hello"); // This will print No such property because hello is not defined

console.log(data1);
console.log(data2);
console.log(data3);