// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let numO = 0;
    let numX = 0;
    for (let element of str) {
        if (element.toUpperCase() === "O") {
            numO += 1
        } else if (element.toUpperCase() === "X") {
            numX += 1
        }
    }

    if (numO === numX) {
        return true
    } else {
        return false
    }

}


console.log(XO("xxOo"))