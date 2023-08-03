const cartIcon = document.querySelector(".icon-cart");
const cartCount = document.getElementById("count-products");
const cartProductsContainer = document.querySelector(".container-cart-products");
const cartTotal = document.querySelector(".total-pagar");
const cartEmpty = document.querySelector(".cart-empty");

const items = document.querySelectorAll(".item");

// Función para cargar los productos del Local Storage al cargar la página
function loadCartItemsFromLocalStorage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length > 0) {
    cartProductsContainer.innerHTML = "";
    cartItems.forEach((item) => {
      const cartProduct = createCartItemElement(item.title, item.price, item.quantity);
      cartProductsContainer.appendChild(cartProduct);
    });

    const total = calculateTotal(cartItems);
    updateCartTotal(total);
    updateCartCount(cartItems.length);

    cartEmpty.style.display = "none";
    cartProductsContainer.classList.remove("hidden-cart");
  }
}

// Función para guardar los productos en el Local Storage
function saveCartItemsToLocalStorage(cartItems) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Función para crear un elemento del carrito
function createCartItemElement(title, price, quantity, description) {
  const cartProduct = document.createElement("div");
  cartProduct.classList.add("row-product");
  cartProduct.innerHTML = `
    <div class="cart-product">
      <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${quantity}</span>
        <p class="titulo-producto-carrito">${title}</p>
        <p class="description">${description}</p>
        <span class="precio-producto-carrito">$${(price * quantity).toFixed(2)}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  `;

  const closeButton = cartProduct.querySelector(".icon-close");
  closeButton.addEventListener("click", removeCartItem);

  return cartProduct;
}

// Función para actualizar el total del carrito
function updateCartTotal(total) {
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para actualizar la cantidad de productos en el carrito
function updateCartCount(count) {
  cartCount.textContent = count;
}

// Función para calcular el total del carrito
function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Función para añadir un producto al carrito
function addToCart(event) {
  const button = event.target;
  const productContainer = button.parentElement;
  const productTitle = productContainer.querySelector("h2").textContent;
  const productPrice = parseFloat(productContainer.querySelector(".price").textContent.slice(1));

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cartItems.find((item) => item.title === productTitle);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      title: productTitle,
      price: productPrice,
      quantity: 1,
    });
  }

  saveCartItemsToLocalStorage(cartItems);
  loadCartItemsFromLocalStorage();
}

// Función para eliminar un producto del carrito
function removeCartItem(event) {
  const closeButton = event.target;
  const cartProduct = closeButton.parentElement;
  const productTitle = cartProduct.querySelector(".titulo-producto-carrito").textContent;

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems = cartItems.filter((item) => item.title !== productTitle);

  saveCartItemsToLocalStorage(cartItems);
  loadCartItemsFromLocalStorage();
}

// Asignar el evento "click" al botón "Añadir al carrito" de cada item.
items.forEach((item) => {
  const addButton = item.querySelector(".btn-add-cart");
  addButton.addEventListener("click", addToCart);
});

// Asignar evento al ícono del carrito para mostrar/ocultar el carrito al hacer clic.
cartIcon.addEventListener("click", () => {
  cartProductsContainer.classList.toggle("hidden-cart");
});

// Cargar los productos del Local Storage al cargar la página
loadCartItemsFromLocalStorage();