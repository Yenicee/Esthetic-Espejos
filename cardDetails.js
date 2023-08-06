function showDetails(productNumber) {
    const titleElement = document.getElementById("detail-title");
    const descriptionElement = document.getElementById("detail-description");
    const detailsElement = document.getElementById("details");
    const priceElement = document.getElementById("priceElement");
    // Cambiar los detalles según el producto seleccionado
     if (productNumber === 1) {
        titleElement.textContent = "Agua micelar";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/agua mise.jpg";
        priceElement.textContent = "$80.00"
    } else if (productNumber === 2) {
        titleElement.textContent = "Crema ros";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/crema ros.jpg";
        priceElement.textContent = "$870.00"
    } else if (productNumber === 3) {
        titleElement.textContent = "Crema mineral";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/crema.png";
        priceElement.textContent = "$456.05"
    } else if (productNumber === 4) {
        titleElement.textContent = "Malec";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/MALBEC.JPG";
        priceElement.textContent = "$689.00"
    } else if (productNumber === 5) {
        titleElement.textContent = "Mazz vits";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/MAZZ VITC.jpg";
        priceElement.textContent = "$98.00"
    } else if (productNumber === 6) {
        titleElement.textContent = "Gloss";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/omg gloss.jpg";
        priceElement.textContent = "$341.00"
    } else if (productNumber === 7) {
        titleElement.textContent = "Serum";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/serum.jpg";
        priceElement.textContent = "$320.00"
    } else if (productNumber === 8) {
        titleElement.textContent = "Micelar";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/img product/posteo agua micelar 6 en 1.png";
        priceElement.textContent = "$980.00"
    } else if (productNumber === 9) {
        titleElement.textContent = "Crema roso";
        descriptionElement.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi iusto error quae natus sapient";
        detailsElement.querySelector("img").src = "../img/crema ros.jpg";
        priceElement.textContent = "$1050.00"
    } 


    // Mostrar los detalles y ocultar la tarjeta de producto seleccionada
    detailsElement.style.display = "block";
    document.querySelectorAll(".item")[productNumber].style.display = "true";
}

function hideDetails() {
    const detailsElement = document.getElementById("details");

    // Ocultar los detalles y mostrar todas las tarjetas de producto
    detailsElement.style.display = "none";
    const productCards = document.querySelectorAll(".product-card");
    for (const card of productCards) {
        card.style.display = "block";
    }
}