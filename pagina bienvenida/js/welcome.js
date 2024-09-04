const welcomeMessage = document.getElementById("welcomeMessage");
const btnEliminar = document.getElementById("btnEliminar");
const alertaValidacionNombre = document.getElementById("alertValidacionNombre");
const alertaValidacion = document.getElementById("alertValidacion");


window.addEventListener("load", function(event){
    if(this.localStorage.getItem("userName") !=null)
        alertaValidacion.innerHTML = `Hola ${userName}, bienvenido/a de nuevo`;
        alertaValidacionNombre.style.display="block"
})


btnEliminar.addEventListener("click", function(event) {
    event.preventDefault(); // Asegurarse de prevenir el comportamiento por defecto
    localStorage.removeItem("userName");
    welcomeMessage.innerHTML = ""; // Limpiar el mensaje de bienvenida
    alertaValidacionNombre.innerHTML = "Nombre eliminado. Por favor, regresa a la página de inicio y coloca un nombre.";
    alertaValidacion.style.display = "block"; // Mostrar alerta después de eliminar
    // location.href = "index.html";
    history.go(0); // Recargar la página
});
 
 
 
//  // Función para eliminar el nombre del localStorage
//  const userName = localStorage.getItem('userName');
//  // Verificar si hay un nombre guardado
//  if (userName) {
//     document.getElementById('welcomeMessage').innerText = `Hola ${userName}, bienvenido/a de nuevo`;
// } else {
//     const alerta = document.getElementById('alertValidacion');
//     const alertaText = document.getElementById('alertValidacionNombre');
//     alertaText.innerText = 'Por favor, regresa a la página de inicio y coloca un nombre.';
//     alerta.classList.remove('d-none'); // Mostrar el bloque de alerta
// }

//   // Función para eliminar el nombre del localStorage
//   document.getElementById('btnGuardar').onclick = function() {
//     localStorage.removeItem('userName');
//     document.getElementById('welcomeMessage').innerText = '';
//     const alerta = document.getElementById('alertValidacion');
//     const alertaText = document.getElementById('alertValidacionNombre');
//     alertaText.innerText = 'Nombre eliminado. Por favor, regresa a la página de inicio y coloca un nombre.';
//     alerta.classList.remove('d-none'); // Mostrar el bloque de alerta
// };