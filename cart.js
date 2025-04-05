let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    let item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function loadCartItems() {
    const cartItems = document.getElementById("cart-items");
    let cartTotal = 0;
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        const totalPrice = (item.price * item.quantity).toFixed(2);
        cartTotal += parseFloat(totalPrice);

        cartItems.innerHTML += `
            <tr>
                <td><img src="${item.image}" width="50"> ${item.name}</td>
                <td>TT$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>TT$${totalPrice}</td>
                <td><button onclick="removeItem(${index})">❌</button></td>
            </tr>
        `;
    });

    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
}

// Load on page
if (document.getElementById("cart-items")) {
    loadCartItems();
}

// Always update cart count
updateCartCount();
