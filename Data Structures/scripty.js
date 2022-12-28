"use strict";

var firstName = "Samuel";

const jonas = {
    firstName: "Jonaa",
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2048 - this.year);

        //first solution
        const self = this;
        const ifGenZ = function(){
            console.log(self);
            // console.log(this.year >= 1999 && this.year <= 2009)
            console.log(self.year >= 1999 && self.year <= 2009)
        }

        //second solution
        const isMill = () => {
            console.log(self);
            console.log(this.year >= 1999 && this.year <= 2009)
        }

        ifGenZ();
        isMill();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
}

jonas.greet();
jonas.calcAge();

const addExp = (a,b) => {
    //argument keywords do not work in arrow functions
    // console.log(arguments);
    return a + b
};

//arguments keyword
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
}

addExpr(2,5);
addExp(2,4);

let age = 22;
let oldAge = age;
age = 23;

console.log(age);
console.log(oldAge);

const me = {
    myName: "Samuel",
    age: 23,
}

const friend = me;
friend.myName = "Juice";
friend.age = 24;

console.log(me);
console.log(friend);


//primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Samuels";
console.log(lastName, oldLastName);


//reference types
let getha = {
    firstName: "Getha",
    lastName: "Williams",
    age: 26,
}

const marriedGetha = getha;
marriedGetha.lastName = "Samuels";
console.log("Before marriage", getha);
console.log("AFter marriage", marriedGetha);


//copying objects
let getha2 = {
    firstName: "Getha",
    lastName: "Williams",
    age: 26,
    family: ["Bej", "Kol", "Bro"]
}

const gethaCopy = Object.assign({}, getha2); 
gethaCopy.lastName = "Samuels";
gethaCopy.family.push("Kor");
gethaCopy.family.push("Maria");
gethaCopy.family.push("Rose");
gethaCopy.family.push("John");
console.log("Before marriage", getha2);
console.log("After marriage", gethaCopy);

