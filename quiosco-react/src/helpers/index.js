/** @format */

export const formatearDinero = (cantidad) => {
	return cantidad.toLocaleString("es-MX", {
		style: "currency",
		currency: "MXN",
	});
};

export const fechaActual = () => {
	const fechaActual = new Date();
	// Array con los nombres de los meses
	const meses = [
		"ene",
		"feb",
		"mar",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agos",
		"sept",
		"oct",
		"nov",
		"dic",
	];
	// Extraer el día, mes, año, hora y minutos
	const dia = fechaActual.getDate().toString().padStart(2, "0"); // Asegurarse que tenga 2 dígitos
	const mes = meses[fechaActual.getMonth()]; // Los meses comienzan desde 0
	const anio = fechaActual.getFullYear();
	const horas = fechaActual.getHours().toString().padStart(2, "0");
	const minutos = fechaActual.getMinutes().toString().padStart(2, "0");

	// Formatear en dd/mm/aaaa HH:mm
	const fechaFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}`;

	return fechaFormateada;
};
