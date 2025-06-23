var ProductNameInput = document.getElementById("ProductNameInput");
var ProductPriceInput = document.getElementById("ProductPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput");
var ProductDescInput = document.getElementById("ProductDescInput");
var searchInput = document.getElementById("searchInput");
var productsContainer = [];
// 3ndo data
if(localStorage.getItem("products") != null) {
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProducts();
}

function addProduct() {
    if(validateProductName() == true) {
        var product={
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        desc: ProductDescInput.value,
    }
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProducts();
}else {
    alert("invalid product name");
}
    }

function displayProducts() {
    var cartona = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        cartona += `<tr>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = cartona;
}
    
function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(ProductNameInput.value) == true) {
        return true;
    }
    else {
        return false;
    }
}