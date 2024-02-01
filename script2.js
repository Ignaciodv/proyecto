// Obtener los elementos del carrito
const carrito = document.querySelector("#carrito");
const agregarCarrito = document.querySelectorAll(".buttons button");

// Agregar evento de click a cada botón de agregar al carrito
agregarCarrito.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) 
{
  let precio = 0;
    const boton = event.target;
    const pelicula = boton.parentElement.parentElement;
    
    const tituloElemento = pelicula.querySelector("h3");
  
    const titulo = pelicula.querySelector("h3").textContent;
     // Precio de la película
    const tipo = pelicula.dataset.tipo;

    if(tipo === "comprar"){
      precio = 5000;
      return precio;
    }else if (tipo === "alquilar"){
      precio2 = 2500;
      return precio;
    }

  // Crear un nuevo elemento de carrito
const nuevoItem = document.createElement("div");
  nuevoItem.classList.add("item");
nuevoItem.innerHTML = `
    <p>${titulo}</p>
    <p>$${precio}</p>
    <button class="eliminar">Eliminar</button>
`;

  // Agregar el nuevo elemento al carrito
carrito.appendChild(nuevoItem);
 // Agregar evento de click al botón de eliminar
const botonEliminar = nuevoItem.querySelector(".eliminar");
botonEliminar.addEventListener("click", eliminarDelCarrito);
}
// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
    const botonEliminar = event.target;
    const item = botonEliminar.parentElement;
    item.remove();
}