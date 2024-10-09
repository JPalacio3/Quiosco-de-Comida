/** @format */

// Mostramos los productos es la parte central

import useSWR from "swr";
import clienteAxios from "../config/axios";
import Producto from "../components/Producto";
import useQuiosco from "../hooks/useQuiosco";
import { LoadingAnimation } from "../components/Animation";

export default function Inicio() {
	const { categoriaActual } = useQuiosco();

	// Consulta SWR
	const fetcher = () =>
		clienteAxios("/api/productos").then((data) => data.data);
	const { data, error, isLoading } = useSWR("/api/productos", fetcher, {
		refreshInterval: 1000,
	});

	// Manejo de error
	if (error) return <div>Error al cargar los productos.</div>;

	// Mostrar animación de carga si está cargando
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen text-4xl">
				<LoadingAnimation />
			</div>
		);
	}

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
