// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) { //Math.sqart return the square root of a number
        return true // Number.isInteger checks if a number is integer 
    } else {
        return false
    }
  }

  console.log(isSquare(-25))