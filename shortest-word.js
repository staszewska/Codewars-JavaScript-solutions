// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let array = s.split(" ");
    let shortestWord = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i].length < shortestWord.length) {
            shortestWord = array[i]
        }
    }

    return shortestWord.length
}


console.log(findShort("It's the most wonderful time of a year"))