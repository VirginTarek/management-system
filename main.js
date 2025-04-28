var ProductNameInput = document.getElementById("ProductNameInput");
var ProductPriceInput = document.getElementById("ProductPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput"); //ProductCategoryInput
var ProductDescriptionInput = document.getElementById("ProductDescriptionInput");
var productsContainer = [];

if(localStorage.getItem("products") != null) {    
    productsContainer = JSON.parse(localStorage.getItem("products"));
    displayProducts();
}
function addProduct() {
    var product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        description: ProductDescriptionInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    // clearform();
    displayProducts();
}
function clearform() {
    ProductNameInput.value = "";
    ProductPriceInput.value = "";
    ProductCategoryInput.value = "";
    ProductDescriptionInput.value = "";
}
//ht3di 3la array element element
function displayProducts() {
    var cartoona = ``;
    for(var i=0; i<productsContainer.length; i++){
        cartoona+=`
        <tr>        
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>        
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].description}</td>  
            <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-outline-danger">Delete</button></td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning btn-sm">Update</button></td>
        </tr>    `
    }
    document.getElementById("tbody").innerHTML = cartoona;
}
function deleteProduct(deletedIndex) {
    productsContainer.splice(deletedIndex, 1);
    localStorage.setItem("products", JSON.stringify(productsContainer));
    displayProducts();
}

