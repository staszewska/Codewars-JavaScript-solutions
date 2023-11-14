// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {

    let newArray = []
    let sorted = Array.from(s1)
    let sorted2 = Array.from(s2)

    newArray = sorted.concat(sorted2)

    let uniqueArray = new Set() // Set is a collection of unique value, eliminates duplicates, can hold any value

    for (let element of newArray) {
        uniqueArray.add(element)
    }

    return Array.from(uniqueArray).sort().join("") // turning a Set into an array

}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))