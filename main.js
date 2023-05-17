//ACA SE GENERO EL CARRITO DE LA PAGINA
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProductos = document.querySelector('.container-cart-productos')

btnCart.addEventListener('click', () => {
    containerCartProductos.classList.toggle('hidden-cart')

})

/***********************************************/
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

//lista de todos los contenedores de productos
const productsList = document.querySelector('container-item')

//VARIABLE DE ARREGLOS DE PRODUCTOS
let allProducts = []





productsList.addEventListener('click' , e => {

            console.log(e.target.classList)

})
















