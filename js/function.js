const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("nameInput");
const alertaValidacionNombre = document.getElementById("alertaValidacionNombre");
const alertaValidacion = document.getElementById("alertaValidacion");
let isValid = true;

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    alertaValidacionNombre.innerHTML = "";
    alertaValidacion.style.display = "none";
    isValid = true;

    // Validar el nombre del producto
    if (txtNombre.value.trim().length < 3) {
        txtNombre.style.border = "solid red medium";
        alertaValidacionNombre.innerHTML = "Por favor, introduce un nombre. </br>";
        alertaValidacion.className = "alert alert-danger fade show"; // Clase de alerta roja
        alertaValidacion.style.display = "block";
        isValid = false;
    } else {
        // Si es válido, mostrar mensaje de éxito y guardar el nombre
        txtNombre.style.border = "solid green medium";
        alertaValidacionNombre.innerHTML = "Nombre guardado exitosamente! </br>";
        alertaValidacion.className = "alert alert-success fade show"; // Clase de alerta verde
        alertaValidacion.style.display = "block";
        localStorage.setItem('userName', txtNombre.value);
    }
});






// btnGuardar.addEventListener("click", function(){
//     const name = document.getElementById('nameInput').value;
//     if (name) {
//         localStorage.setItem('userName', name);
//         document.getElementById('message').innerText = 'Nombre guardado exitosamente!';
//     } else {
//         document.getElementById('message').innerText = 'Por favor, introduce un nombre.';
//     }

// });