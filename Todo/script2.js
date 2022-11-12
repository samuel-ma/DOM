

let heading = document.getElementById("head");
let paragraph = document.getElementById("paragraph");
let add = document.getElementById("add");

let newParagraph = document.createElement("p");
let content =  document.createTextNode("This is the second paragraph");
newParagraph.appendChild(content);

add.addEventListener("click", function(){
    let newP = document.body.appendChild(newParagraph);
    console.log(newP);
    return newP;
})