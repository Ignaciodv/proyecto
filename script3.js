
/* 1er intento */

/* // Obtener los elementos del carrito
const carrito = document.querySelector("#carrito");
const agregarCarrito = document.querySelectorAll(".buttons button");

// Agregar evento de click a cada botón de agregar al carrito
agregarCarrito.forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    const boton = event.target;
    const pelicula = boton.parentElement.parentElement;
    const titulo = pelicula.querySelector("h3").textContent;
    let precio = 0; // Precio de la película
    const tipo = pelicula.dataset.tipo;

    if(tipo === "comprar"){
      precio = 5000;
      return precio
    }else if (tipo === "alquilar"){
      precio = 2500;
      return precio
    }
    console.log("Precio de la pelicula " + precio);

  // Crear un nuevo elemento de carrito
const nuevoItem = document.createElement("div");
  nuevoItem.classList.add("item");
nuevoItem.innerHTML = `
    <p>${titulo}</p>
    <p>$${precio}</p>
    <button class="eliminar">Eliminar</button>
`;
/* --------------------------------------------------------- */



/* 2do intento */

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
 } */
 
 
 
 /* Para obtener las listas y el boton de limpiar */
 
 /* const listaAlquilados = document.getElementById('listaAlquilados');
 const listaComprados = document.getElementById('listaComprados');
 const botonLimpiarAlquilados = document.querySelector('button[onclick="limpiarAlquilados()"]');
 const botonLimpiarComprados = document.querySelector('button[onclick="limpiarComprados()"]');
 
 
 /* funciones para manejar la lista de alquilados y comprados */
 /* function agregarAlquilado() {
   const pelicula = this.parentNode.parentNode;
   const titulo = pelicula.querySelector('h3').textContent;
   const itemLista = document.createElement('li');
   itemLista.textContent = titulo;
   listaAlquilados.appendChild(itemLista);
 }
 function agregarComprado() {
   const pelicula = this.parentNode.parentNode;
   const titulo = pelicula.querySelector('h3').textContent;
   const itemLista = document.createElement('li');
   itemLista.textContent = titulo;
   listaComprados.appendChild(itemLista);
 }
 
 
 /* agregar eventos a los botones alquilar y comprar */
 
 /* const botonesAlquilar = document.querySelectorAll('button[onclick="alquilar()"]');
 botonesAlquilar.forEach((boton) => {
   boton.addEventListener('click', agregarAlquilado);
 });
  */
 /* const botonesComprar = document.querySelectorAll('button[onclick="comprar()"]');
 botonesComprar.forEach((boton) => {
   boton.addEventListener('click', agregarComprado);
 }); */
 
 // Funciones para limpiar las listas de alquilados y comprados
 /* function limpiarAlquilados() {
   listaAlquilados.innerHTML = '';
 }
 function limpiarComprados() {
   listaComprados.innerHTML = '';
 } */
 
 // Agregar eventos a los botones de limpiar
 /* botonLimpiarAlquilados.addEventListener('click', limpiarAlquilados);
 botonLimpiarComprados.addEventListener('click', limpiarComprados); */ 
 
 
 /*------------------------------------------------------------  */
 
 
 /* 3er intento */
 // Obtener las listas y el botón de limpiar
 
 const listaAlquilados = document.getElementById('listaAlquilados');
 const listaComprados = document.getElementById('listaComprados');
 const botonLimpiarAlquilados = document.querySelector('button[onclick="limpiarAlquilados()"]');
 const botonLimpiarComprados = document.querySelector('button[onclick="limpiarComprados()"]');
 
 
 // Funciones para manejar la lista de alquilados y comprados
 
 const botonesAlquilar = document.querySelectorAll('button[onclick="alquilar()"]');
 botonesAlquilar.forEach((boton) => {
 boton.addEventListener('click', function ()
 const pelicula = this.parentNode.parentNode;
 const titulo = pelicula.querySelector('h3').textContent;
 const itemLista = document.createElement('li');
 const valor = 2500;
 itemLista.innerHTML = `${titulo} - <strong>Alquiler:</strong> $${valor}`;
 listaAlquilados.appendChild(itemLista);
 alert(`Se alquiló la película "${titulo}"`);
 
 });
 const botonesComprar = document.querySelectorAll('button[onclick="comprar()"]');
 botonesComprar.forEach((boton) => {
   boton.addEventListener('click', function () {
   const pelicula = this.parentNode.parentNode;
   const titulo = pelicula.querySelector('h3').textContent;
   const itemLista = document.createElement('li');
   const valor = 5000;
   itemLista.innerHTML = `${titulo} - <strong>Compra:</strong> $${valor}`;
   listaComprados.appendChild(itemLista);
   alert(`Se compró la película "${titulo}"`);
 });
 
 
 // Agregar eventos a los botones de alquilar y comprar
 const botonesAlquilar = document.querySelectorAll('button[onclick="alquilar()"]');
 botonesAlquilar.forEach((boton) => {
   boton.addEventListener('click', agregarAlquilado);
 });
 
 const botonesComprar = document.querySelectorAll('button[onclick="comprar()"]');
 botonesComprar.forEach((boton) => {
   boton.addEventListener('click', agregarComprado);
 });
 
 // Funciones para limpiar las listas de alquilados y comprados
 function limpiarAlquilados() {
   listaAlquilados.innerHTML = '';
 }
 function limpiarComprados() {
   listaComprados.innerHTML = '';
 }
 
 // Agregar eventos a los botones de limpiar
 botonLimpiarAlquilados.addEventListener('click', limpiarAlquilados);
 botonLimpiarComprados.addEventListener('click', limpiarComprados);