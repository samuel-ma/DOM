

// Working with classes in Javascript
//object oriented paradigm

// how to convert classes to objects
class Animal{}
let newObj = Object.create(Animal);
console.log(newObj);

// another way of creating objects from classes
class Aniamal2{};
let newObj2 = Object.create(Aniamal2);
console.log(newObj2);

// working with inheritance
class Bird extends Animal{}
class Eage extends Bird{}

// working with encapsulation
let myName = "abcd";
let newName = myName.toUpperCase();
console.log(newName);

// Working with abstraction

// Working with polymorphism
const bicycle = {
    bell: function(){
        console.log("Ring, ring! Watch out, please!");
    }
}

const door = {
    door: function(){
        console.log("Ring, ring! Come here, please!");
    }
}

function ringTheBell(thing){
    console.log(thing.bell())
}

let cycle = bicycle.bell();
let or = door.bell();
console.log("cycle");
console.log("or");
ringTheBell(bicycle);
ringTheBell(door);

//example of polymorphism using classes in Javascript
class Bird{
    useWing(){
        console.log("Flying!");
    }
}

class Eagle extends Bird{
    useWings(){
        super.useWings();
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird{
    useWings(){
        console.log("Diving!")
    }
}

let baldEagle = new Eagle();
let kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();


//example of a callback function 
function myDisplayer(some) {
    console.log(some);
  }
  
  function addTwoNums(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = addTwoNums(2, 6);
  myDisplayer(result);



