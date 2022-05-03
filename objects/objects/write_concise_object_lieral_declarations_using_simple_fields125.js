// Write Concise Object Literal Declarations Using Simple Fields

/*
const createPerson = (name, age, gender) => {

    return {
        name: name, // First name is the key and the second name is the value
        age: age,   // First age is the key and the second age is the vaule
        gender: gender // First gender is the key and the second gender is the vaule
  
    };
};
*/

//Convert the above text to make it more simple

const createPerson = (name, age, gender) => ( {name, age, gender});

console.log(createPerson("Mike Schmidt", 30, "Male")); // This will print out { name: 'Mike Schmidt', age: 30, gender: 'Male' }