// Create Strings using Template Literals

const person = {
    name: "Mike Schmidt",
    age: 30

};

// Tamplate literal with multi-line and string interpolation
// Using back ticks you can put in javascript land (${person.name}) and it takes the persons name and inserts it right into withoput writing it out

const greeting = `Hello, name is ${person.name}! I am ${person.age} years old.`

console.log(greeting);

const result = {
    success: ["max-length", "no_amd", "perfer-arrow-functions"],
    failure: ["no-var", "var_on_top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]

};

/* Were changinng the below code... look to line 32 ↓↓↓

function makeList(arr) {
    const resultDisplayArray = null;

    return resultDisplayArray;

}
*/

function makeList1(arr) {
    const resultDisplayArray = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;

}

function makeList2(arr) {
    const resultDisplayArray2 = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArray2.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray2;

}

function makeList3(arr) {
    const resultDisplayArray3 = [];
    for(let i = 0; i < arr.length; i++) {
        resultDisplayArray3.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray3;

}


/*
* MakeList(result.failure) should return:
[ `<li class="text-warning">no-var</li>`,
  `<li class="text-warning">var-on-top</li>`,
  `<li class="text-warning">linebreak</li>`
]
 */


const resultDisplayArray1 = makeList1(result.failure);
const resultDisplayArray2 = makeList2(result.success);
const resultDisplayArray3 = makeList3(result.skipped);

console.log(resultDisplayArray1); // This will print what is in the failure array
console.log(resultDisplayArray2); // This will print what is in the success array
console.log(resultDisplayArray3); // This will print what is in the skipped array