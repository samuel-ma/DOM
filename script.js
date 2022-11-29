
//working with paragraphs
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



//working with the list items
//removing items from a list
//storing the items in a variable
let items = document.querySelectorAll(".item1");
let deleteButtons = document.getElementsByClassName("delete-button");

    //the remove function
    for (let p = 0; p<deleteButtons.length; p++){
        let button = deleteButtons[p];
        button.addEventListener("click", function(event){
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.parentElement.remove();
        })
    }


