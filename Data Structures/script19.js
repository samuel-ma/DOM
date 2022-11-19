"use strict";

/*
    CODING CHALLENGE
    Let's go back to Mark and John comparing their BMIS
    Use objects to implement the calculations!
    BMI is = mass / height ** 2

    1. For each of them, create an object with properties
    for their full name, mass and height

    2. Create a "calcBMI" method on each object to calculate
    the BMI, store the BMI value to a propert and return the method

    3. Console log who has the higher BMI
    Together with fullName and respective BMI

    TEST DATA
    Mark weighs 78kg and is 1.69m tall.
    John weight 92kg and is 1.95m tall.

*/


const person1 = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.weight / (this.height ** 2);
        this.finalBMI = Math.ceil(this.BMI);
        // console.log(`Mark's BMI is ${finalBMI}`);
        return this.finalBMI;
    }
} 

const person2 = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.weight / (this.height ** 2);
        this.finalBMI = Math.ceil(this.BMI);
        // console.log(`John's BMI is ${finalBMI}`);
        return this.finalBMI;
    }
}

let person1BMI = person1.calcBMI();
let person2BMI = person2.calcBMI();

if(person1BMI > person2BMI){
    console.log(`${person1.firstName}'s BMI (${person1.calcBMI()}) is higher than ${person2.firstName}'s (${person2.calcBMI()})`)
} else if (person1BMI === person2BMI){
    console.log(`${person1.firstName}'s BMI (${person1.calcBMI()}) is equal to ${person2.firstName}'s (${person2.calcBMI()})`)
} else if (person1BMI < person2BMI){
    console.log(`${person2.firstName}'s BMI (${person2.calcBMI()}) is higher than ${person1.firstName}'s (${person1.calcBMI()})`)
}

