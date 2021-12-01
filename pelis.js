let btnAgregar = document.querySelector('.btnAgregar');
let btnEliminar = document.querySelector('.btnEliminar');


btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);
btnFilas.addEventListener('mousedownm', Filas);

function agregar(){
    var Top = prompt("ingresa el top");
    var Peli = prompt("ingresa una pelicula");
    var Cal = prompt("Asigna una calificación");
    var imagen = prompt("URL de imagen");
    var fila=Top + "<tr><th>" + Peli +"</td><th>"+ Cal +"</td><tr>";

    var btnAgregar = document.createElement("TR");
   	btnAgregar.innerHTML=fila;
    document.getElementById("tabla").appendChild(btnAgregar);
} 


function eliminar(){
    var fila=Top + "<tr><th>" + Peli +"</td><th>"+ Cal +"</td><tr>";
    var btnEliminar =document.removeChild (fila);
}





