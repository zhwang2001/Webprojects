//Switch range 
//if condition is evaluated within case then put true as expression
const speed = 55;
switch (true) {
//speed limit is below 50
case speed <= 50:
    console.log("You are within the speed limit");
    break
//speed limit is above 50
case speed > 50:
    console.log("You are speeding!");
    break
//when speed limit is below 0 or above 300
case speed < 0:
case speed >= 300:
    console.log("wtf");
    break
//default statement
default:
    alert("Something broke please make sure you use an integer");
    break
}
//regular switch operator
//if condition is binary (right or wrong) within case then the expression needs to be placed within the parentheses
const looks = 11;
switch (looks) {
    case 1:
        console.log("Sewage");
        break
    case 2:
        console.log("Plastic surgery is a good choice for you");
        break
    case 3:
        console.log("you need to wear makeup 24/7");
        break
    case 4:
        console.log(":(");
        break
    case 5:
        console.log("you're halfway there");
        break
    case 6:
        console.log("not bad");
        break
    case 7:
        console.log("average");
        break
    case 8:
        console.log("good looking");
        break
    case 9:
        console.log("Sweet Jesus");
        break
    case 10:
        console.log("Are you a model");
        break

    case 11:
    case 12:
        console.log("Rarer than francium");
    default:
        console.log("and you've broken the scale");
        break

    
}

//special methods
var mystring = "Adam and Even";
var newstring = mystring.replace("Even", "Eve");
console.log(newstring);

let myarray = ["I", "love", "chocolate", "cake"];
let joined = myarray.join(' ');
console.log(joined);

const myNumber = Math.random();
console.log("Random Number: ", myNumber);


//this function draws 100 random circles insie a canvas element

function welcome(name = "Chris Evans") {
    console.log("Hello: ", name);
}
welcome();

const cost = 3000;
const people = 4;

function funcClick() {
    var calculator= document.getElementById("message");
    calculator.innerHTML = cost / people;
}
//function declaration (can be called before declaration)
//function (verb function name) (argument) {
//    statement
//    return expression 
//}
function pet(animal) {
    return ("my pet is a " + animal);
}

let pet2 = pet("goat") //declare a variable 
console.log(pet2);

//function expression
//only called when reached within control flow
let pet3 = function(animal) {
    return ('my pet is a, ${animal} ')
};

console.log(pet3("cat"));

//function expression condensed + arrows
// even more condensed form (declare variable and create function and return value same line (implement arrows)
let favorite_animal = (animal) => 'my pet is a ' + animal; //turn favorite animal into a function (parenthesses msut be present for function expressions)
console.log(favorite_animal('dog'));


let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


// understand the problem (problem statement)

    // write a program that that increments from 1 to N every time a number if divisible by 3 output fizz
    // every time it's divisible by 5 output buzz
    //every time it's divisible by 3 and 5 write fizz buzz

// (for web development) per page, study competition for aesthetics of website
    // flow chart for structure and functionality
    // list of desired inputs and outputs

// pseudocode
    //for i in range(1, N):
        // if i % 3 == 0: return "fizz"
        // elif i % 5 == 0 return "buzz"
        // elif i % 5 and i % 3 return "fizz buzz"

// write code
