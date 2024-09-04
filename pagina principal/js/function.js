const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("nameInput")
const alertaValidacionNombre = document.getElementById("alertaValidacionNombre")
const alertaValidacion = document.getElementById("alertValidacion")
let isValid = true;

btnGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.style.border = "";
    alertValidacionNombre.innerHTML = "";
    alertValidacion.style.display = "none";
    isValid = true;
    //validar el nombre del producto
    if (txtNombre.value.length < 3) {
      txtNombre.style.border = "solid red medium";
      alertValidacionNombre.innerHTML =
        "Por favor, introduce un nombre. </br>";
      alertValidacion.style.display = "block";
      isValid = false;
    }
        txtNombre.style.border = "solid green medium";
      alertValidacionNombre.innerHTML =
        "Nombre guardado exitosamente! </br>";
      alertValidacion.style.display = "block";
    
      localStorage.setItem('userName', txtNombre.value);
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