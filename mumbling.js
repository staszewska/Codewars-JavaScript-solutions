// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let newArray = [];
    for (let i = 0; i < s.length; i++) {
        newArray.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
    }

    const result = newArray.join("-")
    return result
}

console.log(accum("hello"))