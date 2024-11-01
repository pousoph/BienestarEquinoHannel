// Array de objetos de bebidas
const drinks = [
  { 
    title: "Team Penning",
    description: "Disciplina ecuestre que requiere la coordinación de tres jinetes para apartar tres becerros específicos, identificados por números, del rebaño principal y conducirlos a un corral en el menor tiempo posible.",
    url: "img/slide1.jpg"
  },
  {
    title: "Sorting",
    description: "Ejecutado en parejas, se desarrolla en una arena con forma de 8 y una abertura central. Los jinetes deben trasladar el ganado (numerado del 0 al 9 más una X) de forma secuencial entre los dos espacios, completando la tarea en menos de 75 segundos.",
    url: "img/slide2.jpg"
  },
  {
    title: "Cutting",
    description: "Disciplina que pone a prueba la sincronización entre jinete y caballo para aislar una res específica del rebaño. El caballo debe demostrar autonomía en sus movimientos, anticipando y respondiendo a las acciones del ganado, evidenciando su "cow sense" natural. Estas disciplinas honran las tradiciones del trabajo ganadero, destacando la destreza de caballos y jinetes en el manejo efectivo del ganado.",
    url: "img/slide2.jpg"
  }
];

// Seleccionar el contenedor de bebidas
const drinkContainer = document.querySelector(".drinks");

// Función para mostrar las bebidas en la página
function displayDrinks() {
  let drinksHtml = '';

  drinks.forEach(drink => {
    drinksHtml += `
      <div class="drink-item">
        <img src="${drink.url}" alt="${drink.title}" class="drink-image">
        <div class="drink-text">
          <h3>${drink.title}</h3>
          <p>${drink.description}</p>
        </div>
      </div>
    `;
  });

  // Insertar el HTML acumulado en el contenedor de bebidas
  drinkContainer.innerHTML = drinksHtml;
}

// Llamar a la función para mostrar las bebidas al cargar la página
document.addEventListener("DOMContentLoaded", displayDrinks);
