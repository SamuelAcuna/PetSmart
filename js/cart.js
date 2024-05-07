/* 
variables utilizadas 
preciounitario1
cantidad1
subtotal1
subtotal
total
*/

// Supongamos que tienes el valor en un elemento HTML con el id "miTd"
var preciounitario1 = document.getElementById("preciounitario1").textContent;
var cantidad1 = parseInt(document.getElementById("cantidad1"));

// Eliminar caracteres "$" y "." y luego convertir a entero
var entero1 = parseInt(preciounitario1.replace(/\$|\./g, ''));


function actualizarCampo2() {

    var miInput = document.getElementById('subtotal1');
    
    // Cambiamos el valor del elemento
    miInput.value = 'Nuevo valor';
    console.log("act");
}

// Document ready
$(document).ready(function() {

        actualizarCampo2();
  
    console.log("holaaa");
});