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
    constructor(id, imagen, nombre,precio){
	this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    }
}
let servicio1 = new Servicio("1", "http", "Aire acondicionado", 9500);
let servicio2 = new Servicio("2", "http", "Electricidad", 6500);
let servicio3 = new Servicio("3", "http", "Plomeria", 4500);
let servicio4 = new Servicio("4", "http", "Pintura", 6500);
let servicio5 = new Servicio("5", "http", "Pequeños arreglos", 3500);
let servicio6 = new Servicio("6", "http", "Gasista", 6500);

// // console.log(servicio1);

// // Array con objetos

const serviciosDrHouse = [
 servicio1,
 servicio2,
 servicio3,
 servicio4,
 servicio5,
 servicio6,
];


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



// INCORPORAR EVENTOS A MI PROYECTO

// creo la funcion respuesta

function respuesta(nombre){
    console.log("click", nombre);
}

let electricidad = document.getElementById("electricidad");
electricidad.addEventListener("click", () => respuesta("electricidad"));


let plomeria = document.getElementById("plomeria");
plomeria.addEventListener("click", () => respuesta("plomeria"));

let aire = document.getElementById("aire acondicionado");
aire.addEventListener("click", () => respuesta("aire acondicionado"));

// CONTAR CLICKS CADA VEZ QUE SE DIRIGEN A LAS REDES

let face = document.getElementById("facebook");
face.addEventListener("click", () => respuesta ("facebook"));

let insta = document.getElementById("instagram");
insta.addEventListener("click", () => respuesta ("instagram"));

let twitter = document.getElementById("twitter");
twitter.addEventListener("click", () => respuesta ("twitter"));

let youtube = document.getElementById("youtube");
youtube.addEventListener("click", () => respuesta ("youtube"));

 