const div = document.getElementById("cards");
const modalContainer = document.getElementById("modalContainer");
let botonCarrito = document.getElementById("carrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const resultadoBusqueda = document.getElementById("resultadoBusqueda")


// // funcion contructora - creadora de objetos:
class Servicio{
  constructor(id, imagen, nombre,precio,cantidad,lista1,lista2,lista3){
this.id = id;
  this.imagen = imagen;
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
  this.lista1 = lista1;
  this.lista2 = lista2;
  this.lista3 = lista3;
  }
}

// // Array con objetos - Servicios de Dr. House
const serviciosDrHouse = [
new Servicio("1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBeaTdtW2Oh4fsAkybsm1mmEiqefMMbD6xQ&usqp=CAU", "Mantenimiento integral Locales comerciales", 15000,1,"Mantenimiento preventivo y Correctivo","Personal capacitado","Presupuesto sin cargo"),
new Servicio("2", "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg", "Cerrajeria y Mobiliario", 10200,1,"Reparaciones","Puertas", "Cerrajeria"),
new Servicio("3", "http://127.0.0.1:5500/img/electricidad.jpeg", "Electricidad",    3500,1,"Cableados", "Instalaciones Electricas","Enchufes y tomacorrientes"),
new Servicio("4", "http://127.0.0.1:5500/img/plomeria.jpeg", "Plomeria", 5500,1,"Sanitarios","Reparacion de cañerias", "Destapaciones"),
new Servicio("5", "https://tiendasblatem.es/blog/wp-content/uploads/2019/07/pintor-profesional-1-scaled.jpg","Pintura",5500,1,"Pintura exterior e interior","Cotizaciones","Precios a su medida"),
new Servicio("6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpJITGtUVFz_HB8QN9DwVOtvo6EedKBrbJQ&usqp=CAU", "Pequeños arreglos",3300,1,"Reparaciones varias","Arreglos","Cambio de focos"),
new Servicio("7", "https://www.lujanhoy.com.ar/wp-content/uploads/2020/04/Gasista.jpg", "Gasista",5000,1,"Revision de calefactores","Cocinas y Termotanques","Perdidas")
];

localStorage.setItem("Servicios", JSON.stringify(serviciosDrHouse));


// // Servicios renderizados- cards

// Carrito se guarda en el local Storage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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
  </div>
` 
cards.append(div)
const boton = document.getElementById(item.id) 
boton.addEventListener("click", () => comprarServicio(item))
})

// CARRITO - comprar servicio
const comprarServicio = (item) => {
  let servicioExiste = carrito.find(servicio => servicio.id === item.id)
  if (servicioExiste !== undefined){
    servicioExiste.precio = servicioExiste.precio + item.precio
    servicioExiste.cantidad = servicioExiste.cantidad + 1
  }else {
    Swal.fire(
      'Genial!',
        'Este servicio fue agregado al carrito correctamente!',
        'success'
      )
    carrito.push({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      imagen: item.imagen,
      cantidad: item.cantidad
    }); 
    Swal.fire(
      'Genial!',
        'Este servicio fue agrgado al carrito correctamente!',
        'success'
      )
  }
  console.log(carrito);
  carritoCounter();
  saveLocal();
}
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

// MODAL PARA MOSTRAR CARRITO
const pintarCarrito = () => {
modalContainer.innerHTML ="";  
modalContainer.style.display = "flex";

const modalHeader =  document.createElement("div");
modalHeader.className = "modalHeader";
modalHeader.innerHTML = `
<h1 class= "modalHeaderTitle">Carrito</h1>
`;
modalContainer.append(modalHeader);

const modalButton = document.createElement("h2");
modalButton.innerText ="❌";
modalButton.className = "modalHeaderButton";

modalButton.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

modalHeader.append(modalButton);

carrito.forEach((item) => {
  let carritoContent = document.createElement("div");
  carritoContent.className = "modalContent";
  carritoContent.innerHTML = `
  <img class="imgModal" src="${item.imagen}">
  <h3>${item.nombre}</h3>
  <p>$${item.precio}</p>
  <span class="restar"> - </span>
  <p>Cantidad: ${item.cantidad}</p>
  <span class="sumar"> + </span>
  <p>Total: ${item.cantidad * item.precio}</p>
  <span class="eliminarServicio"> ❌ </span>
`;
modalContainer.append(carritoContent);

// funcionalidad del boton restar
let restar = carritoContent.querySelector(".restar");
restar.addEventListener("click", ()=> {
  if (item.cantidad !== 1) {
    item.cantidad --;
  }
saveLocal();
pintarCarrito();
});

// funcionalidad del boton sumar
let sumar = carritoContent.querySelector(".sumar");
sumar.addEventListener("click", ()=> {
item.cantidad ++;
saveLocal();
pintarCarrito();
});

// funcionalidad del boton eliminar
let eliminar = carritoContent.querySelector(".eliminarServicio");
eliminar.addEventListener("click", () => {
  Swal.fire(
    'Buen trabajo!',
    'El servicio se ha eliminado correctamente!',
    'success'
  )   
eliminarServicio(item.id);
});
});

// funcion sumar los servicios del carrito
const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement("div");
totalBuying.className = "totalBuying";
totalBuying.innerHTML = ` Total a pagar: $${total} `;
modalContainer.append(totalBuying);
};
botonCarrito.addEventListener("click", pintarCarrito);

// funcion eliminar servicio del carrito
const eliminarServicio = (id) => {
const foundid = carrito.find((item) => item.id === id);

carrito = carrito.filter ((carritoid) => {
return carritoid !== foundid;

});
carritoCounter();
saveLocal();
pintarCarrito();

};

// contador del carrito
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  
  const carritoLength = carrito.length;
  
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();

// BUSCADOR - en el html servicios
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")


const buscarServicio = (string) => {
// console.log(string)
let servicioBuscado = serviciosDrHouse.find(item => item.nombre.includes(string))
// console.log(servicioBuscado);
inputAfter.value = ""
localStorage.setItem("buscar", JSON.stringify(servicioBuscado));
Swal.fire({
  icon: 'success',
  title: 'Servicio Encontrado', 
  footer: 'Precio: $'+ servicioBuscado.precio,
  text: servicioBuscado.nombre
});
}

// JSON.parse(localStorage.getItem("buscar"));
botonInput.addEventListener("click", () =>buscarServicio(inputAfter.value))
