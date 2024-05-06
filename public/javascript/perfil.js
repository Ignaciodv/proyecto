const datosUsuario = document.getElementById("datosUsuario");

const usuarioGuardado = localStorage.getItem("usuario")

if(usuarioGuardado){
    const usuario = JSON.parse(usuarioGuardado)
    datosUsuario.innerHTML = `

        <p><strong>Su nombre es:</strong> ${ usuario.nombre }</p>
        <p><strong>Su apellido es:</strong> ${ usuario.apellido }</p>
        <p><strong>Su mail es:</strong> ${ usuario.email}</p>
        <p><strong>Su nombre de usuario es:</strong> ${ usuario.userName }</p>
        <p><strong>Su telefono es:</strong> ${ usuario.numeroTelefono }</p>
        <p><strong>Su comentario es:</strong> ${ usuario.comentario }</p>

    `;
}else{
    datosUsuario.innerHTML = "No hay datos";
}

