// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let result = this.split(" ");
    let modifiedElements = result.map((element) => {
      return element[0].toUpperCase() + element.slice(1)
    })
    return modifiedElements.join(" ")
  };
    

    

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())