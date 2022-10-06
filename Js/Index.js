// Calcular costo total de servicios seleccionados por el usuario.
// let gastoTotal = 0;
// let precioServicio = 0;
// let contador = 0;

// alert(
// 	'Vamos a sumar el total de los servicios elegidos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido númerico'
// );

// function ingresarPrecio() {
// 	precioServicio = Number(
// 		prompt('Ingrese el precio del servicio' + (contador + 1) + ':')
// 	);

// 	while (precioServicio > 0) {
// 		gastoTotal = calcularTotal(precioServicio);
// 		contador++; 
//         precioServicio = Number(
// 			prompt('Ingrese el precio del servicio' + (contador + 1) + ':')
// 		);
// 	}

// 	if (precioServicio <= 0) {
// 		console.log('Ha terminado de introducir los precios de los servicios');
// 	}
// }

// function calcularTotal(precioServicio) {
// 	return gastoTotal + precioServicio;
// }


// function mostrarTotal() {
// 	console.log('Cantidad de servicios: ' + contador);
// 	console.log('El precio total es $' + gastoTotal);
// 	console.log('El precio total es $', gastoTotal);
// }

// // Invocación o llamada a las funciones
// ingresarPrecio();
// mostrarTotal();

// funcion contructora - creadora de objetos:
class Servicio{
    constructor(id, imagen, nombre,precio,lista1,lista2){
	this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.lista1 = lista1;
    this.lista2 = lista2;
    }
}
//Cargue un Servicio nuevo y lo renderice en  servicios.html (los otros ya los tenia cargados originalmente en mi html)


// let servicio2 = new Servicio("2", "http", "Electricidad", 6500);
// let servicio3 = new Servicio("3", "http", "Plomeria", 4500);
// let servicio4 = new Servicio("4", "http", "Pintura", 6500);
// let servicio5 = new Servicio("5", "http", "Pequeños arreglos", 3500);
// let servicio6 = new Servicio("6", "http", "Gasista", 6500);

// // // console.log(servicio1);

// // // Array con objetos
const serviciosDrHouse = [
new Servicio("1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf74j1Uk41HF2bc5ksDHibiqgoIlft6cnCg&usqp=CAU", "Mantenimiento integral Locales comerciales", "Consultar","Mantenimiento preventivo y Correctivo"),
new Servicio("2", "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg", "Cerrajeria y Mobiliario", "Consultar","Reparaciones","Puertas")
//  servicio1,
//  servicio2,
//  servicio3,
//  servicio4,
//  servicio5,
//  servicio6,
];
console.log(serviciosDrHouse);

// INCORPORAR EVENTOS A MI PROYECTO - evento click en el servicios.html CARDS con servicios
const div = document.getElementById("cards")
let cualquiera = document.getElementById("cualquiera")
console.log(cualquiera);

let boton = document.getElementById("botonElec")
// let boton2 = document.getElementById("botonPlom")
// let boton3 = document.getElementById("botonPa")
let boton4 = document.getElementById("botonAa")
// let boton5 = document.getElementById("botonPint")



//forEach para renderizar los servicios
let carrito = []
// serviciosDrHouse.forEach(item => {
//   let servicioRenderizado = document.createElement("div")
//   servicioRenderizado.innerHTML = `
//   <div class="col-12 col-md-6 col-xl-4">
//     <div class="card mx-auto mt-3">
//       <div class="card-body text-center">
//           <h5 class="card-title text-center text-black animate__animated animate__flipInY">${item.nombre}</h5>
//           <p class="card-text">Precio: $${item.precio}<img src="${item.imagen}"class="img-fluid" alt="pintura"></p>
//           <ul class="lista">
//               <li>${item.lista1}</li>
//               <li>${item.lista2}</li>
//               <li></li>
//               <li></li>
//           </ul>
//           <button id=${item.id}>Seleccionar</button>
//         </div>
//      </div>
//   </div>
// ` 
// cualquiera.append(servicioRenderizado)
// const boton = document.getElementById(item.id) 
// boton.addEventListener("click", () => comprarServicio(item))
// })

// const comprarServicio = (item) => {
//   console.log(item);
// }

// const muestreConsola = () => {
//   console.log("Elec")
// }

// boton.addEventListener("click", muestreConsola)
// boton4.addEventListener("click", () => console.log("Aire acon"))

//BUSCADOR





// console.log(serviciosDrHouse[0]);
// console.log(serviciosDrHouse[1]);


// serviciosDrHouse.forEach(item => 
//     console.log(item.precio));    

// // Mostrar por alert todos los items
// serviciosDrHouse.forEach(item => {
// let mostrar =
// `nombre: ${item.nombre} $${item.precio}`;
// console.log(mostrar);
// });

// //recorrer el arreglo - filter.

// Filtra todos los elementos que  cumplan con la condicion.
// Filtrar servicios que tengan un precio menor a 4000

// let precio = parseInt(prompt("Ingrese un precio minimo"));
// let filtrados = serviciosDrHouse.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
// let mostrar = 
// `nombre: ${item.nombre} $${item.precio}`;
// alert(mostrar);
// });

// //Metodo de busqueda - map.
// Crear nuevos arreglos

// let precios = serviciosDrHouse.map(item => item.precio);
// let nombres = serviciosDrHouse.map(item => item.nombre);
// let preciosNuevos = serviciosDrHouse.map(item => {
// 	return {
// 		nombre: item.nombre,
// 		precio: item.precio + 2000};
// 	});
// console.log(preciosNuevos);

// let nombre = prompt("ingrese el nombre del servicio");
// let encontrado = serviciosDrHouse.find((item => item.nombre === nombre));
// let mostrar = `
//      Nombre del servicio: ${encontrado.nombre}
//      Precio $${encontrado.precio}
//    `;
// alert(mostrar);

// //Metodo de busqueda - some.

// let servicio = prompt("Ingrese el nombre del servicio buscado");
// let existe = serviciosDrHouse.some(item => item.nombre === servicio);
// alert(existe);

// //agregar elementos al final del arreglo
// serviciosDrHouse.push({id: 7, nombre: "Sanitarios", precio: 6500}); 
// console.log(serviciosDrHouse);


// //agregar elementos al principio del arreglo
// serviciosDrHouse.unshift({id: 7, nombre: "Sanitarios", precio: 6500}); 
// console.log(serviciosDrHouse);

// // EVENTOS AL HTML CONTACTO - FORMULARIO 

// let input = document.getElementById("nombre");
// // input.addEventListener("click", () => respuesta("click"));

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let inputs = e.target.children;
//     console.log(inputs[0].value);
//     console.log(inputs[1].value);
//     console.log(inputs[2].value);
//     console.log(inputs[3].value);  
//     // validacion mail
//   if (!inputs[0].value.includes("@")) {
//     inputs[0].value === "";
//   }
// });