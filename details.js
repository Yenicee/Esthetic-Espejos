function showDetails(productNumber) {
    const titleElement = document.getElementById("detail-title");
    const descriptionElement = document.getElementById("detail-description");
    const detailsElement = document.getElementById("details");

    if (productNumber === 1) {
        titleElement.textContent = "Agua micelar";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = ""; 
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/agua mise.jpg";
    } else if (productNumber === 2) {
        titleElement.textContent = "Crema ros";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = ""; 
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/crema ros.jpg";

    } else if (productNumber === 3) {
        titleElement.textContent = "Crema mineral";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
            
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/crema.png";

    } else if (productNumber === 4) {
        titleElement.textContent = "Malec";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/MALBEC.JPG";

    } else if (productNumber === 5) {
        titleElement.textContent = "Mazz vits";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/MAZZ VITC.jpg";

    } else if (productNumber === 6) {
        titleElement.textContent = "Gloss";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList); detailsElement.querySelector("img").src = "../img/img product/omg gloss.jpg";

    } else if (productNumber === 7) {
        titleElement.textContent = "Serum";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = ""; 
        descriptionElement.appendChild(descriptionList); detailsElement.querySelector("img").src = "../img/img product/serum.jpg";

    } else if (productNumber === 8) {
        titleElement.textContent = "Micelar";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/img product/posteo agua micelar 6 en 1.png";


    } else if (productNumber === 9) {
        titleElement.textContent = "Crema roso";
        const descriptionList = document.createElement("ul");
        const details = [
            "Envase: El diseño del envase puede variar en términos de forma, tamaño y estilo, y algunos labiales vienen en envases recargables.",
            "Fórmula sin crueldad: Muchos consumidores buscan productos labiales que sean libres de crueldad animal y veganos.",
            "Pigmentación: La intensidad del color puede variar, desde labiales ligeros y translúcidos hasta colores más intensos y vibrantes.",
            "Duración: Este labial ofrece una larga duración de hasta ocho horas sin necesidad de reaplicación."
        ];
        details.forEach(detail => {
            const listItem = document.createElement("li");
            listItem.textContent = detail;
            descriptionList.appendChild(listItem);
        });
        descriptionElement.innerHTML = "";
        descriptionElement.appendChild(descriptionList);
        detailsElement.querySelector("img").src = "../img/crema ros.jpg";
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

//ACA VA LA LOGICA DEL INPUT DE LOS PRODUCT SEARCH

function searchProduct() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const productItems = document.querySelectorAll(".item");
  
    productItems.forEach((item) => {
      const productName = item.querySelector("h2").innerText.toLowerCase();
      if (productName.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  document.getElementById("searchInput").addEventListener("input", searchProduct);

