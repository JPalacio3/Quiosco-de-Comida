/** @format */
import useSWR from "swr";
import { LoadingAnimation } from "../components/Animation";
import clienteAxios from "../config/axios";
import Producto from "../components/Producto";
import { fechaActual } from "../helpers";

export default function Productos() {
	const token = localStorage.getItem("AUTH_TOKEN");
	const fetcher = () =>
		clienteAxios("/api/productos", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then((datos) => datos.data);

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

	console.log(data.data);

	return (
		<div>
			<div className="flex items-center font-bold justify-between">
				<h1 className="text-4xl font-black">Productos</h1>
				<p className="text-xl">{fechaActual()}</p>
			</div>
			<p className="text-2xl my-10">Maneja la disponibilidad desde aquí</p>

			<div className="grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
				{data.data.map((producto) => (
					<Producto
						key={producto.imagen}
						producto={producto}
						botonDisponible={true}
					/>
				))}
			</div>
		</div>
	);
}
