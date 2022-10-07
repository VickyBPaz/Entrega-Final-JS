
// funcion contructora - creadora de objetos:
class Servicio{
    constructor(id, imagen, nombre,precio,lista1,lista2,lista3,lista4){
	  this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.lista1 = lista1;
    this.lista2 = lista2;
    this.lista3 = lista3;
    this.lista4 = lista4;
    }
}
// Array con objetos - Servicios de Dr. House
const serviciosDrHouse = [
new Servicio("1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf74j1Uk41HF2bc5ksDHibiqgoIlft6cnCg&usqp=CAU", "Mantenimiento integral Locales comerciales", "Consultar","Mantenimiento preventivo y Correctivo"),
new Servicio("2", "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg", "Cerrajeria y Mobiliario", "Consultar","Reparaciones","Puertas"),
new Servicio("3", "http://127.0.0.1:5500/img/electricidad.jpeg", "Electricidad", 3500),
new Servicio("4", "http://127.0.0.1:5500/img/plomeria.jpeg", "Plomeria", 6500),
new Servicio("5", "https://tiendasblatem.es/blog/wp-content/uploads/2019/07/pintor-profesional-1-scaled.jpg","Pintura", 5500),
new Servicio("6", "http", "Pequeños arreglos", 3300),
new Servicio("7", "http", "Gasista", 5000)
];
// GUARDAR ARRAY EN EL LOCAL Storage
localStorage.setItem("servicios", JSON.stringify(serviciosDrHouse))

// RECUPERAR DATA DEL LOCAL Storage
let recuperarServicio = localStorage.getItem("servicios")
console.log(recuperarServicio);

// INCORPORAR EVENTOS A MI PROYECTO - evento click en servicios.html CARDS con servicios
const div = document.getElementById("cards")


// ELIMINE LAS CARDS que originalmente tenia en servicios.html y , a traves del forEach, plasme un patron de una card ara renderizar los servicios a traves de JS.
//forEach para renderizar los servicios
// Cada item tendra un id unico

let carrito = []

serviciosDrHouse.forEach(item => {
  let servicioRenderizado = document.createElement("div")
  servicioRenderizado.innerHTML = `
  <div class="col-12 col-md-6 col-xl-4">
    <div class="card mx-auto mt-3">
      <div class="card-body text-center">
          <h5 class="card-title text-center text-black animate__animated animate__flipInY">${item.nombre}</h5>
          <p class="card-text">Precio: $${item.precio}<img src="${item.imagen}"class="img-fluid" alt="pintura"></p>
          <ul class="lista">
              <li>${item.lista1}</li>
              <li>${item.lista2}</li>
              <li>${item.lista3}</li>
              <li>${item.lista4}</li>
          </ul>
          <button id=${item.id}>Seleccionar</button>
        </div>
     </div>
  </div>
` 
cards.append(servicioRenderizado)
const boton = document.getElementById(item.id) 
boton.addEventListener("click", () => comprarServicio(item))

})

// CARRITO 
const comprarServicio = (item) => {
  let servicioExiste = carrito.find (servicio => servicio.id === item.id)
  if(servicioExiste === undefined) {
    carrito.push({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      imagen: item.imagen,
      cantidad: 1
    })
  } else{
    servicioExiste.precio = servicioExiste.precio + item.precio
    servicioExiste.cantidad = servicioExiste.cantidad + 1

  }
}

// TRAJE DEL HTML UN BOTON CREADO PARA EL CARRITO
// let botonCarrito = document.getElementById("carrito")
// botonCarrito.addEventListener("click" , () => console.log(carrito))


//BUSCADOR - en el html servicios
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")

const buscarServicio = (string) => {
console.log(string);
let servicioBuscado = serviciosDrHouse.find(item => item.nombre.includes(string))
console.log(servicioBuscado);
inputAfter.value = ""

}

botonInput.addEventListener("click", ()=> buscarServicio(inputAfter.value))

// FORMULARIO
let emails = []
const formu = document.getElementById("formulario")


const guardarEmail = (e) => {
  e.preventDefault()
  let nombre = e.target.children[0].value;
  let apellido = e.target.children[1].value;
  let mail = e.target.children[2].value
  
  emails.push({
    nombre: nombre,
    apellido: apellido, 
    mail: mail
  })
console.log(emails);
}
formulario.addEventListener("submit", (e) => guardarEmail(e))
