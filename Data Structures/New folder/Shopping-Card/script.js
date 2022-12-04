let likes = document.getElementsByClassName("like");

for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.addEventListener("click", function() {
        if (like.firstChild.style.color == "black") {
            like.firstChild.style.color = "red";
        } else {
            like.firstChild.style.color = "black";
        }
    });
}

let plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
    let btnplus = plus[i];
    btnplus.addEventListener("click", function() {
        btnplus.previousElementSibling.value++;
        calculfinalprice();
    });
}

let minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minus.length; i++) {
    let btnmin = minus[i];
    btnmin.addEventListener("click", function() {
        if (btnmin.nextElementSibling.value > 1) btnmin.nextElementSibling.value--;
        calculfinalprice();
    });
}

let deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
    let btnremove = deletes[i];
    btnremove.addEventListener("click", function() {
        btnremove.parentElement.remove();
        calculfinalprice();
    });
}

function calculfinalprice() {
    let price = document.getElementsByClassName("price");
    let quant = document.getElementsByClassName("Quant");
    let finalPrice = 0;
    for (let i = 0; i < price.length; i++) {
        finalPrice =
            finalPrice + parseInt(price[i].innerHTML) * parseInt(quant[i].value);
    }
    console.log(finalPrice);
    let total = document.getElementById("finalPrice");
    total.value = finalPrice;
}