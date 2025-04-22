var ProductNameInput = document.getElementById("ProductNameInput");
var ProductPriceInput = document.getElementById("ProductPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput"); //ProductCategoryInput
var ProductDescriptionInput = document.getElementById("ProductDescriptionInput");

function addProduct() {
    var product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        description: ProductDescriptionInput.value
    }
}
