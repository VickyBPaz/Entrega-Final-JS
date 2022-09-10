// Calcular costo total de seleccionados por el usuario.
let gastoTotal = 0;
let precioServicio = 0;
let contador = 0;

alert(
	'Vamos a sumar el total de los servicios elegidos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido númerico'
);

function ingresarPrecio() {
	precioServicio = Number(
		prompt('Ingrese el precio del servicio' + (contador + 1) + ':')
	);

	while (precioServicio > 0) {
		gastoTotal = calcularTotal(precioServicio);
		contador++; 
        precioServicio = Number(
			prompt('Ingrese el precio del servicio' + (contador + 1) + ':')
		);
	}

	if (precioServicio <= 0) {
		console.log('Ha terminado de introducir los precios de los servicios');
	}
}

function calcularTotal(precioServicio) {
	return gastoTotal + precioServicio;
}

function mostrarTotal() {
	console.log('Cantidad de servicios: ' + contador);
	console.log('El precio total es $' + gastoTotal);
	console.log('El precio total es $', gastoTotal);
}

// Invocación o llamada a las funciones
ingresarPrecio();
mostrarTotal();