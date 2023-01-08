

"use strict"

const users = [
    {name: "Samuel", email: "hellosam@soniq.io"}
];

const final = (users[0]) ? users[0].name : "User array empty";
console.log(final)

//solving using optional chaining

const final2 = (users[0]?.name ?? "User array empty");
console.log(final2);


const obj = {
    name: "Samuel",
    email: "hellosam@soniq.io"
}

for(const day of Object.entries(obj)){
    console.log(day);
}



