/** @format */

export const formatearDinero = (cantidad) => {
	return cantidad.toLocaleString("es-MX", {
		style: "currency",
		currency: "MXN",
	});
};
