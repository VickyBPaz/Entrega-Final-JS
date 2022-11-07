// // // GUARDAR ARRAY EN EL LOCAL Storage
// // localStorage.setItem("servicios", JSON.stringify(serviciosDrHouse))

// // // RECUPERAR DATA DEL LOCAL Storage
// let recuperarServicio = localStorage.getItem("servicios")
// console.log(recuperarServicio);


// AGREGUE LIBRERIA SWEET
// CAMBIAR PRECIO DE LOS SERVICIOS a traves del localstorage
// const cambiarPrecio = (nombre,precio) => {
//   let servicios = JSON.parse(localStorage.getItem("servicios"));
//   let servicioEncontrado = servicios.find(item => 
//   item.nombre === nombre);
//   servicioEncontrado.precio = precio;
//   localStorage.setItem("servicios",JSON.stringify(servicios));
//   Swal.fire(
//     'Buen trabajo!',
//     'El precio se ha cambiado correctamente!',
//     'success'
//   )  
// };

// let nombre = prompt("Ingrese el nombre del Servicio");
// let precio = prompt("Ingrese el precio del Servicio");

// cambiarPrecio(nombre,precio);


// AGREGUE LIBRERIA SWEET
// ELIMINAR SERVICIOS DEL CARRITO

// const eliminar = (nombre) => {
//   let servicios = JSON.parse(localStorage.getItem("servicios"));
//   servicios = servicios.filter(item => 
//   item.nombre != nombre);
//   localStorage.setItem("servicios",JSON.stringify(servicios));
//   Swal.fire(
//     'Buen trabajo!',
//     'El servicio se ha eliminado correctamente!',
//     'success'
//   )  
// };

// let nombre = prompt("Ingrese el nombre del Servicio");
// eliminar(nombre);