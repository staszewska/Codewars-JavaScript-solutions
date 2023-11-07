// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {

  // Converting a number into a string and then into an array
  let newArray = Array.from(String(n))

  newArray.sort(function (a, b) {
    return b - a
  })

  return Number(newArray.join(""))
}

