
 // Obtener las listas y el botón de limpiar
 
 const listaAlquilados = document.getElementById('listaAlquilados');
 const listaComprados = document.getElementById('listaComprados');
 const botonLimpiarAlquilados = document.querySelector('button[onclick="limpiarAlquilados()"]');
 const botonLimpiarComprados = document.querySelector('button[onclick="limpiarComprados()"]');
 
 // Funciones para manejar la lista de alquilados y comprados
 
 // Función para agregar una película alquilada
 function agregarAlquilado() {
     const pelicula = this.parentNode.parentNode;
     const titulo = pelicula.querySelector('h3').textContent;
     const itemLista = document.createElement('li');
     const valor = 2500;
     itemLista.innerHTML = `${titulo} - <strong>Alquiler:</strong> $${valor}`;
     listaAlquilados.appendChild(itemLista);
     alert(`Se alquiló la película "${titulo}" Precio: $${valor}`);
 }
 
 // Función para agregar una película comprada
 function agregarComprado() {
     const pelicula = this.parentNode.parentNode;
     const titulo = pelicula.querySelector('h3').textContent;
     const itemLista = document.createElement('li');
     const valor = 5000;
     itemLista.innerHTML = `${titulo} - <strong>Compra:</strong> $${valor}`;
     listaComprados.appendChild(itemLista);
     alert(`Se compro la película "${titulo}" Precio: $${valor}`);
 }
 
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
 