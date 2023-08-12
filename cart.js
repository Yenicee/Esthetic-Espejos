const products = [
    {
        name: 'Agua Miselar',
        price: 80,
        image: '../img/img product/agua mise.jpg',
    },

    {
        name: 'Crema Ros',
        price: 280,
        image: '../img/img product/crema ros.jpg',
    },

    {
        name: 'Crema Mineral',
        price: 870,
        image: '../img/img product/crema.png',
    },

    {
        name: 'Malec',
        price: 456,
        image: '../img/img product/MALBEC.JPG',
    },

    {
        name: 'Mazz vitc',
        price: 341,
        image: '../img/img product/MAZZ VITC.jpg',
    },

    {
        name: 'Gloss',
        price: 98,
        image: '../img/img product/omg gloss.jpg',
    },

    {
        name: 'Serum',
        price: 320,
        image: '../img/img product/serum.jpg',
    },

    {
        name: 'Micelar',
        price: 980,
        image: '../img/img product/posteo agua micelar 6 en 1.png',
    },

    {
        name: 'Crema roso',
        price: 1050,
        image: '../img/crema ros.jpg',
    },

];

const cartItems = [];

const cartCountElement = document.getElementById('cart-count');
const totalElement = document.getElementById('total');
const cartContainer = document.querySelector('.cart-container');

function countProductOccurrences(item) {
    return cartItems.filter(cartItem => cartItem.name === item.name).length;
}

function updateCartCount() {
    cartCountElement.textContent = cartItems.length;
}

function updateTotal() {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent = total;
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCart();
}

function renderCart() {
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const count = countProductOccurrences(item);


        cartItem.innerHTML = `
            <div class="item">
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <div class="info-product">
                    <h2>${item.name}</h2>
                    <p class="price">$${item.price}</p>
                    <div class="quantity-control">
                    <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                    <p class="quantity">${count}</p>
                    <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                      </div>
                    <button onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    updateCartCount();
    updateTotal();
}


function addToCart(productIndex) {
    const product = products[productIndex];
    const existingCartItemIndex = cartItems.findIndex(item => item.name === product.name);

    if (existingCartItemIndex !== -1) {
        cartItems[existingCartItemIndex].quantity += 1;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    renderCart();
}

function increaseQuantity(itemIndex) {
    if (cartItems[itemIndex].quantity < 99) {
        cartItems[itemIndex].quantity += 1;
        renderCart();
    }
}

function decreaseQuantity(itemIndex) {
    if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity -= 1;
        renderCart();
    }
}