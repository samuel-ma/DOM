
//storing the html buttons in a javascript variable
let add = document.getElementById("add");
let remove = document.getElementById("remove");

//creating a new paragraph using javascript
let paragraphElement = document.createElement("p");

let content = document.createTextNode("My name is Samuel Ma");

paragraphElement.appendChild(content);

//adding a new paragraph to the page
add.addEventListener("click", function(){
    let addParagraph = document.body.appendChild(paragraphElement);
    return addParagraph;
})

//removing a new paragraph from the page
remove.addEventListener("click", function(){
    let removeParagraph = document.body.removeChild(paragraphElement);
    return removeParagraph;
})