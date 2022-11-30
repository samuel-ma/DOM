

let input = document.querySelector(".input");
let addItem = document.querySelector(".add");
let clearAll = document.getElementById("clear");

let taskItems = document.getElementById("tastItems");
let items = document.getElementsByClassName("items");
let checkbox = document.getElementsByClassName("check");
let tasks = document.getElementsByClassName("tasks");
let select = document.getElementsByClassName("select");

let all = document.getElementsByClassName("all");
let pending = document.getElementsByClassName("pending");
let completed = document.getElementsByClassName("completed");

input.value = "Wash your car";
let inputItem = input.innerHTML;
console.log(inputItem);



//when the input is filled
//add item by pressing the plus button
addItem.addEventListener("click", function(){
    let paragraphText = document.createElement("p");
    paragraphText.innerText = "Wash your car";
    taskItems.appendChild(paragraphText);
})

//add an event listener to the select element to delete items
select.addEventListener("click", function(){
    this.parent.parent.remove();
})