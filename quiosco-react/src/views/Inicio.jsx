/** @format */

// Mostramos los productos es la parte central

import useSWR from "swr";
import clienteAxios from "../config/axios";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";

export default function Inicio() {
	const { categoriaActual } = useQuiosco();

	// Consulta SWR
	const fetcher = () =>
		clienteAxios("/api/productos").then((data) => data.data);
	const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
		refreshInterval: 1000,
	});

	// console.log(data);
	console.log(error);
	// console.log(isLoading);
	if (isLoading) return "Cargando...";

	const productos = data.data.filter(
		(producto) => producto.categoria_id === categoriaActual.id,
	);

	return (
		<>
			<h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
			<p className="text-2xl my-10">
				Elige y personaliza tu pedido a continuación
			</p>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
				{productos.map((producto) => (
					<Producto key={producto.imagen} producto={producto} />
				))}
			</div>
		</>
	);
}
