// Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0]
    }
    else if(strokes <= par - 2) {
        return names[1]
    }
    else if(strokes == par - 1) {
        return names[2]
    }
    else if(strokes == par) {
        return names[3]
    }
    else if(strokes == par + 1) {
        return names[4]
    }    
    else if(strokes == par + 2) {
        return names[5]
    }   
     else if(strokes >= par + 3) {
        return names[6]
    }

}

// Chage these values to test
console.log(golfScore(5, 4)); //This will print out Birdie
console.log(golfScore(5, 3)); //This will print out Eagle
console.log(golfScore(5, 6)); //This will print out Bogey
console.log(golfScore(5, 1)); //This will print out Hole-in-one!
console.log(golfScore(5, 8)); //This will print out Go Home!
console.log(golfScore(5, 5)); //This will print out Par
console.log(golfScore(5, 7)); //This will print out Double Bogey

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"

*/