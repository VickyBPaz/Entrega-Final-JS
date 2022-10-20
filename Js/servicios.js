
// // funcion contructora - creadora de objetos:
class Servicio{
    constructor(id, imagen, nombre,precio,lista1,lista2,lista3){
	  this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.lista1 = lista1;
    this.lista2 = lista2;
    this.lista3 = lista3;
    }
}

// // Array con objetos - Servicios de Dr. House
const serviciosDrHouse = [
new Servicio("1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBeaTdtW2Oh4fsAkybsm1mmEiqefMMbD6xQ&usqp=CAU", "Mantenimiento integral Locales comerciales", "Consultar","Mantenimiento preventivo y Correctivo","Personal capacitado","Presupuesto sin cargo"),
new Servicio("2", "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg", "Cerrajeria y Mobiliario", "Consultar","Reparaciones","Puertas", "Cerrajeria"),
new Servicio("3", "http://127.0.0.1:5500/img/electricidad.jpeg", "Electricidad", 3500, "Cableados", "Instalaciones Electricas","Enchufes y tomacorrientes"),
new Servicio("4", "http://127.0.0.1:5500/img/plomeria.jpeg", "Plomeria", "$Consultar","Sanitarios","Reparacion de cañerias", "Destapaciones"),
new Servicio("5", "https://tiendasblatem.es/blog/wp-content/uploads/2019/07/pintor-profesional-1-scaled.jpg","Pintura",5500,"Pintura exterior e interior","Cotizaciones","Precios a su medida"),
new Servicio("6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpJITGtUVFz_HB8QN9DwVOtvo6EedKBrbJQ&usqp=CAU", "Pequeños arreglos",3300,"Reparaciones varias","Arreglos","Cambio de focos"),
new Servicio("7", "https://www.lujanhoy.com.ar/wp-content/uploads/2020/04/Gasista.jpg", "Gasista", 5000,"Revision de calefactores","Cocinas y Termotanques","Perdidas")
];
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

// // INCORPORAR EVENTOS A MI PROYECTO - evento click en servicios.html CARDS con servicios
const div = document.getElementById("cards")
console.log(cards);


// // ELIMINE LAS CARDS que originalmente tenia en servicios.html y , a traves del forEach, plasme un patron de una card ara renderizar los servicios a traves de JS.
// //forEach para renderizar los servicios
// // Cada item tendra un id unico

let carrito = []
serviciosDrHouse.forEach(item => {
  let div = document.createElement("div")
  div.innerHTML = `
  <div class="col-12 col-md-6 col-xl-4">
    <div class="card mx-auto mt-3">
      <div class="card-body text-center">
          <h5 class="card-title text-center text-black animate__animated animate__flipInY">${item.nombre}</h5>
          <p class="card-text">Precio: $${item.precio}<img src="${item.imagen}"class="img-fluid" alt="pintura"></p>
          <ul class="lista">
              <li>${item.lista1}</li>
              <li>${item.lista2}</li>
              <li>${item.lista3}</li>
          </ul>
          <button id=${item.id}>Seleccionar</button>
        </div>
     </div>
  </div>
` 
cards.append(div)
const boton = document.getElementById(item.id) 
boton.addEventListener("click", () => comprarServicio(item))
})
// CARRITO 
const comprarServicio = (item) => {
  let servicioExiste = carrito.find(servicio => servicio.id === item.id)
  if (servicioExiste !== undefined){
    servicioExiste.precio = servicioExiste.precio + item.precio
    servicioExiste.cantidad = servicioExiste.cantidad + 1
  }else {
    carrito.push({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      imagen: item.imagen,
      cantidad: 1
    })
  }
}


// // TRAJE DEL HTML UN BOTON CREADO PARA EL CARRITO

// AGREGUE LIBRERIA SWEET AL BOTON DEL CARRITO
// let botonCarrito = document.getElementById("carrito")
// botonCarrito.addEventListener("click" , () => 
// Swal.fire(
//   'Genial!',
//   'Los servicios se han agregado correctamente al carrito!',
//   'success'
// )
// // console.log(carrito)
// );

// BUSCADOR - en el html servicios
// const inputAfter = document.getElementById("inputAfter")
// const botonInput = document.getElementById("botonInput")

const buscarServicio = (string) => {
console.log(string)
let servicioBuscado = serviciosDrHouse.find(item => item.nombre.includes(string))
console.log(servicioBuscado);
inputAfter.value = ""
};

botonInput.addEventListener("click", ()=> buscarServicio(inputAfter.value))

