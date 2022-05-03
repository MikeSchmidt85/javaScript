// Logical Order in If Else Statements

// The if statements have to be in decending order for it to work
// For example the first stement has to be "Less than 5" then the sencond be "Less than 10" and the last "Greater than 10"

/* function orderMyLogic(val) {
     if(val < 10) {
         return "Less than 10";
     } 
     else if (val < 5) {
         return "Less than 5";
     }
     else
     {
         return "Greater than or equal to 10";
     }
}    */

// Change the above code to look like this:
// Notice how it checks this first if statement then continues down the line

function orderMyLogic(val) {
    if(val < 5) {
        return "Less than 5";
    } 
    else if (val < 10) {
        return "Less than 10";
    }
    else
    {
        return "Greater than or equal to 10";
    }
}


// Change this value to test
console.log(orderMyLogic(7)); // This prints out Less than 10
console.log(orderMyLogic(12)); // this prints out Greater than or equal to 10
console.log(orderMyLogic(3)); // This prints out less than 5