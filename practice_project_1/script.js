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
        alert("and... you've broken the scale");
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



