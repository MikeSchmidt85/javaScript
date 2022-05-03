// Mutate an Array Declared with Const

const S = [5, 2, 7];
function editInPlace() {
    "use strict";

    // S = [5, 2, 7];
    S[0]= 2;
    S[1]= 5;
    S[2]= 7;
    // The above lines reassign the indexs with new values ↑↑↑

}

editInPlace();

console.log(S); // This will print out the new array which is [2, 5, 7]