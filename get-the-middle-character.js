// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    //Code goes here!

    // This will give us the middle index(s) of the string
    const middleIndex = Math.floor(s.length / 2);

    // If the string length is odd, we return the single character middleIndex using the charAt method.
    if (s.length % 2 === 1) {
        return s.charAt(middleIndex)
        // If the length of the string is even, we return the two characters at the middle by using the substr method, starting from middleIndex - 1 and extracting 2 characters.
    } else {
        // return s.substr(middleIndex - 1, 2);


        //         middleIndex - 1: This expression subtracts 1 from middleIndex, meaning it's trying to find the character in the string that comes just before the character at the middleIndex.

        // middleIndex + 1: This expression adds 1 to middleIndex, meaning it's trying to find the character in the string that comes just after the character at the middleIndex.
        return s.substring(middleIndex - 1, middleIndex + 1)
    }

}

console.log(getMiddle("middle"))


