"use strict";

const myObj = {
    firstName: "John",
    lastName: "Doe",
    job: "student",

    age: 22,
    birthYear: 1999,

    friends: ["peter", "steven", "james", "david"],
    
    married: false,

    calcAge: function(birthYear){
        return 2030 - this.birthYear;
    },

    myFun: function(){
        return console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

//log the object
console.log(myObj);
//using the dot notation
console.log(myObj.firstName);
//using the square bracket notation
console.log(myObj["age"]);
//accessing the keys
console.log(Object.keys(myObj));
//accessing the values
console.log(Object.values(myObj));
//accessing all the keys and values of the obj in an array
console.log(Object.entries(myObj));

//insert new key value pairs into the object
myObj.bestFriend = "Juice";
console.log(myObj);

myObj.location = "Egypt";
console.log(myObj);

console.log(myObj.calcAge());

console.log(myObj.myFun);

console.log(`${myObj.firstName} is a ${myObj.age} years old ${myObj.job} whose ${(myObj.married === true) ? ("married") : ("unmarried")}`);
