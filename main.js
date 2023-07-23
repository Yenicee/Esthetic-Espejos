// //LOGICA PARA EL CARRITO DE COMPRAS
// document.addEventListener('DOMContentLoaded', () => {
//   const cartIcon = document.querySelector('.container-cart-icon');
//   const cartCount = document.getElementById('count-products');
//   const cartProducts = document.querySelector('.container-cart-products');
//   const cartTotal = document.querySelector('.cart-total');
//   const cartEmpty = document.querySelector('.cart-empty');
//   const addToCartButtons = document.querySelectorAll('.btn-add-cart');
//   const closeCartButtons = document.querySelectorAll('.icon-close');

//   // Initialize cart items as an empty array
//   let cartItems = [];

//   // Function to update the cart display
//   const updateCartDisplay = () => {
//     if (cartItems.length > 0) {
//       cartCount.textContent = cartItems.length;
//       cartEmpty.style.display = 'none';
//       cartTotal.style.display = 'block';

//       // Calculate the total price of all items in the cart
//       const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
//       document.querySelector('.total-pagar').textContent = `$${totalPrice}`;
//     } else {
//       cartCount.textContent = '0';
//       cartEmpty.style.display = 'block';
//       cartTotal.style.display = 'none';
//     }
//   };

//   // Function to add a product to the cart
//   const addToCart = (productId) => {
//     // Find the product with the given productId from your data or API
//     // For this example, let's assume you have a data array with all products
//     const product = data.find((item) => item.id === productId);

//     if (product) {
//       cartItems.push(product);
//       updateCartDisplay();
//     }
//   };

//   // Function to remove a product from the cart
//   const removeFromCart = (productId) => {
//     cartItems = cartItems.filter((item) => item.id !== productId);
//     updateCartDisplay();
//   };

//   // Function to handle the "Add to Cart" button click
//   const handleAddToCartClick = (event) => {
//     const productId = parseInt(event.target.dataset.productId);
//     addToCart(productId);
//   };

//   // Function to handle the "Remove from Cart" button click
//   const handleRemoveFromCartClick = (event) => {
//     const productId = parseInt(event.target.dataset.productId);
//     removeFromCart(productId);
//   };

//   // Add event listeners to the "Add to Cart" buttons
//   addToCartButtons.forEach((button) => {
//     button.addEventListener('click', handleAddToCartClick);
//   });

//   // Add event listeners to the "Remove from Cart" buttons
//   closeCartButtons.forEach((button) => {
//     button.addEventListener('click', handleRemoveFromCartClick);
//   });

//   // Event listener to show/hide the cart when the cart icon is clicked
//   cartIcon.addEventListener('click', () => {
//     cartProducts.classList.toggle('hidden-cart');
//   });
// });

 //SCROLL DE PRODUCTOS DE LA PAG INICIO

 document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
  
    function startDrag(event) {
      event.preventDefault();
      isDragging = true;
      startPosition = getPositionX(event);
      sliderContainer.style.cursor = "grabbing";
      requestAnimationFrame(() => updateSlider(event)); // Pasamos el evento a la función updateSlider
    }
  
    function updateSlider(event) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        const diffX = currentPosition - startPosition;
        currentTranslate = prevTranslate + diffX;
        setSliderPosition();
        requestAnimationFrame(() => updateSlider(event));
      }
    }
  
    function endDrag() {
      isDragging = false;
      prevTranslate = currentTranslate;
      sliderContainer.style.cursor = "grab";
    }
  
    function getPositionX(event) {
      // Verificamos si es un evento de toque en dispositivos táctiles
      return event.type.includes("touch") ? event.touches[0].clientX : event.clientX;
    }
  
    function setSliderPosition() {
      sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
    }
  
    sliderContainer.addEventListener("mousedown", startDrag);
    sliderContainer.addEventListener("mousemove", updateSlider);
    sliderContainer.addEventListener("mouseup", endDrag);
    sliderContainer.addEventListener("mouseleave", endDrag);
  
    // Permite el desplazamiento en pantallas táctiles
    sliderContainer.addEventListener("touchstart", startDrag);
    sliderContainer.addEventListener("touchmove", updateSlider);
    sliderContainer.addEventListener("touchend", endDrag);
    sliderContainer.addEventListener("touchcancel", endDrag);
  });