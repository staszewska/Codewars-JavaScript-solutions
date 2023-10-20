// The function is not returning the correct values. Can you figure out why?

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
      case 2:
        name = 'Venus';
      case 3:
        name = 'Earth';
      case 4:
        name = 'Mars';
      case 5:
        name = 'Jupiter';
      case 6:
        name = 'Saturn';
      case 7:
        name = 'Uranus';
      case 8:
        name = 'Neptune';
    }
    
    return name;
  }

//   The function is not returning the correct values because it does not have the "break" statement.
// When the case is found, it will continue to execute the following statement.
// In order for this fucntion to work, we need to add "break" statement, it will terminate the execution.

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }