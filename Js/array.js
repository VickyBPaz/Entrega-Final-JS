
// // // funcion contructora - creadora de objetos:
// class Servicio{
//     constructor(id, imagen, nombre,precio,cantidad,lista1,lista2,lista3){
// 	this.id = id;
//     this.imagen = imagen;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//     this.lista1 = lista1;
//     this.lista2 = lista2;
//     this.lista3 = lista3;
//     }
// }

// // // Array con objetos - Servicios de Dr. House
// const serviciosDrHouse = [
// new Servicio("1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBeaTdtW2Oh4fsAkybsm1mmEiqefMMbD6xQ&usqp=CAU", "Mantenimiento integral Locales comerciales", 15000,1,"Mantenimiento preventivo y Correctivo","Personal capacitado","Presupuesto sin cargo"),
// new Servicio("2", "https://image.shutterstock.com/image-photo/wood-door-locksmith-maintain-silver-260nw-382330354.jpg", "Cerrajeria y Mobiliario", 10200,1,"Reparaciones","Puertas", "Cerrajeria"),
// new Servicio("3", "http://127.0.0.1:5500/img/electricidad.jpeg", "Electricidad",    3500,1,"Cableados", "Instalaciones Electricas","Enchufes y tomacorrientes"),
// new Servicio("4", "http://127.0.0.1:5500/img/plomeria.jpeg", "Plomeria", 5500,1,"Sanitarios","Reparacion de cañerias", "Destapaciones"),
// new Servicio("5", "https://tiendasblatem.es/blog/wp-content/uploads/2019/07/pintor-profesional-1-scaled.jpg","Pintura",5500,1,"Pintura exterior e interior","Cotizaciones","Precios a su medida"),
// new Servicio("6", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpJITGtUVFz_HB8QN9DwVOtvo6EedKBrbJQ&usqp=CAU", "Pequeños arreglos",3300,1,"Reparaciones varias","Arreglos","Cambio de focos"),
// new Servicio("7", "https://www.lujanhoy.com.ar/wp-content/uploads/2020/04/Gasista.jpg", "Gasista",5000,1,"Revision de calefactores","Cocinas y Termotanques","Perdidas")
// ];

// // // // GUARDAR ARRAY EN EL LOCAL Storage
// localStorage.setItem("servicios", JSON.stringify(serviciosDrHouse))


// // // RECUPERAR DATA DEL LOCAL Storage
// let recuperarServicio = localStorage.getItem("servicios")
// console.log(recuperarServicio);