// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    let result = friends.filter(friend => (friend.length === 4) && isNaN(friend))
    //isNan fucntion checks if an item is not a number
    
    return result
  }

console.log(friend(["Ryan", "Kieran", "Mark", 11]))