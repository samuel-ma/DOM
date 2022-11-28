

//using the switch case statement

let day = "";

switch(day){
        case "Moday":
        console.log("The day today is Monday")
        break;
        case "Tuesday":
        console.log("The day today is Tuesday")
        break;
        case "Wednesday":
        console.log("The day today is Wednesday")
        break;
        case "Thursday":
        console.log("The day today is Thursday")
        break;
        case "Friday":
        console.log("The day today is Friday")
        break;
        case "Saturday":
        console.log("The day today is Saturday")
        break;
        case "Sunday":
        console.log("The day today is Sunday")
        break;
    default:
        day = "There is on input";

}

//using the if else statement to repeat this logic

if(day === "Monday"){
    console.log("The day today is Monday");
} else if (day === "Tuesday"){
    console.log("The day today is Tuesday");
} else if (day === "Wednesday"){
    console.log("The day today is Wednesday");
} else if (day === "Thursday"){
    console.log("The day today is Thursday");
} else if (day === "Friday"){
    console.log("The day today is Friday");
} else if (day === "Saturday"){
    console.log("The day today is Saturday");
} else if (day === "Sunday"){
    console.log("The day today is Sunday");
} else {
    console.log("There is no day today!");
}



//working with ternary expressions
const age = 17;
let newAge = age >= 18;
console.log(age);
console.log(newAge);

newAge ? console.log("Am old enough to drink wine now") : console.log("Am still underage🐓")

console.log(`${newAge ? "I like to drink" : "Am not allowed to drink"}`);

