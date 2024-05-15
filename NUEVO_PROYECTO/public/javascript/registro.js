const registro = document.getElementById("registro")

registro.addEventListener("submit", (event) =>{
    event.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#mail").value;
    let apellido = document.querySelector("#apellido").value;
    let numeroTelefono = document.querySelector("#number").value;
    let comentario = document.querySelector("#coment").value;
    let userName = document.querySelector("#userName").value;
    let password = document.querySelector("#password").value;

    const usuario = {nombre, email, apellido, numeroTelefono, comentario, userName, password};
    localStorage.setItem("usuario", JSON.stringify(usuario))

    window.location.href = "perfil.html"


} )