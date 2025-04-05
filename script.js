// Global variable for cart count
let cartCount = 0;

// Function to update cart count in UI
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Function to add a product to the cart and update the cart count
function addToCart(productName) {
    cartCount++;
    updateCartCount();
    alert(productName + " added to cart!");
}

// Function to search products by name
function searchProducts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let products = document.getElementsByClassName("product-card");

    for (let product of products) {
        let name = product.getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (name.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

// Function to filter products by category
function filterProducts() {
    let category = document.getElementById("categoryFilter").value;
    let products = document.getElementsByClassName("product-card");

    for (let product of products) {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    }
}

// Call updateCartCount on page load to reflect current count
window.onload = function () {
    updateCartCount();
}
