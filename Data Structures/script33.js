"use strict";




const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }];

//platform solution
let i = 0;
while (i < people.length && people[i].name != 'Jack') {
 i++;
}
if (i !== people.length) {
 console.log('Jack is in ' + i);
} else {
 console.log('Cannot find Jack');
}



//my solution
for(let i = 0; i<people.length; i++){

    if(people[i].name == "Jack"){
        console.log(`Jack is available in index ${people.indexOf(people[i])}`);
    } else {
        console.log(`Jack is not available in the array`);
    }
}



//solution using ES6 syntax
//finding Jack
let myArr = ["Sam", "John", "Peter", "Jack"];
const res = myArr.find((item) => item == "Jack");
console.log(res);

//finding his index
const objArr = [
    {name: "Sam", age: 22},
    {name: "John", age: 20},
    {name: "Peter", age: 24}
]

let findName = objArr.findIndex(function(item){
    return item.name == "Peter";
});

console.log(findName);




