"use strict";

const friends = ["Juice", "Wut", "Dp", "Jake"];

friends.push("Ben");
console.log(friends);

friends.pop();
console.log(friends);

friends.splice(0,1,"Simon");
console.log(friends);

friends.unshift("Mario", "Dellan");
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Dp"));

console.log(friends.includes("Dellan"));

//string method, not array method
let myName = "Samuel".split("");
console.log(myName);

