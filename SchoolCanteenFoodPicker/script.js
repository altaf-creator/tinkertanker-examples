let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}

function changeQuantity(name, newQuantity) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity = Math.max(1, newQuantity); // prevent 0 or negative
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const tbody = document.querySelector("#cartTable tbody");
    tbody.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="cartItem">${item.name}</td>
            <td class="cartItem">$${item.price.toFixed(2)}</td>
            <td class="cartItem">
                <input type="number" min="1" value="${item.quantity}"
                    onchange="changeQuantity('${item.name}', this.value)">
            </td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById("cartTotal").innerText = `Total: $${total.toFixed(2)}`;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let orderSummary = "You ordered:\n";
    cart.forEach(item => {
        orderSummary += `- ${item.name} x${item.quantity}\n`;
    });
    orderSummary += `\nTotal: $${cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}`;

    alert(orderSummary);
    cart = [];
    updateCartDisplay();
}
