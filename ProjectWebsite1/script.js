let loginName = "";

function addProductCard() {
    let productName = prompt("Enter the name of the product:");
        let productPrice = prompt("Enter the price of the product:");
    
    let newProductCard = document.createElement("div");
    newProductCard.className = "product-card";

    newProductCard.innerHTML = `
        <div class="product-image">
            <img src="placeholder-images-product-1_large.png" class="product-thumb" alt="">
            <button class="card-btn">add a comment</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${productName}</h2>
            <span class="price">$${productPrice}</span>
        </div>
    `;

    document.querySelector(".product-container").appendChild(newProductCard);

    newProductCard.querySelector(".card-btn").addEventListener("click", function () {
        addComment(newProductCard);
    });
}

function addComment(card) {
    let comment = prompt("Enter your comment:");
    if (comment !== null && comment !== "") {
        let commentElement = document.createElement("p");
        commentElement.innerHTML = `<strong>${loginName}:</strong> ${comment}`;
        card.querySelector(".product-info").appendChild(commentElement);
    }
}


function login() {

    loginName = prompt("Enter your name", "Ognen");

    document.querySelector(".login-section").style.display = "none";
    document.querySelector(".afterLogin").style.display = "inline";

    document.getElementById("welcome").innerHTML = "Welcome " + loginName;
}

let commentButtons = document.querySelectorAll(".card-btn");

commentButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let productCard = this.closest(".product-card");
        addComment(productCard);
    });
});

document.getElementById("Loginbtn").addEventListener("click", login);
document.getElementById("addProduct").addEventListener("click", addProductCard);
