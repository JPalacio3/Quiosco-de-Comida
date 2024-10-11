/** @format */

import useSWR from "swr";
import clienteAxios from "../config/axios";
import { LoadingAnimation } from "../components/Animation";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/es";
import { formatearDinero } from "../helpers";

// Extender dayjs con el plugin
dayjs.extend(relativeTime);
// Cambiar el idioma a español
dayjs.locale("es");

export default function Ordenes() {
	const token = localStorage.getItem("AUTH_TOKEN");

	const fetcher = () =>
		clienteAxios("/api/pedidos", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

	const { data, error, isLoading } = useSWR("/api/pedidos", fetcher, {
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

	return (
		<>
			<div>
				<h1 className="text-4xl font-black">Ordenes</h1>
				<p className="text-2xl my-10">Administra las ordenes desde Aquí</p>
			</div>

			<div className="grid md:grid-cols-3">
				{data.data.data.map((pedido) => (
					<div
						className="p-5 bg-white shadow space-y-2 m-3 hover:bg-gray-50 rounded-xl flex flex-col justify-between"
						key={pedido.id}>
						<p className="text-xl font-bold text-slate-600">
							Contenido del Pedido:{""}
						</p>
						{pedido.productos.map((producto) => (
							<div className="border-b border-b-slate-200 py-4">
								<p className="text-sm">ID: {producto.id}</p>
								<p className="text-indigo-700 font-bold">{producto.nombre}</p>
								<p>
									Cantidad: {""}
									<span className="font-bold">{producto.pivot.cantidad}</span>
								</p>
							</div>
						))}
						<div className="justify-around">
							<p className="text-lg font-bold text-amber-500">
								Cliente: {""}
								<span className="text-slate-600">{pedido.user.name}</span>
							</p>
							<p className="text-lg font-bold text-amber-500">
								Costo del Pedido: {""}
								<span className=" text-slate-600">
									{formatearDinero(pedido.total)}
								</span>
							</p>
							<p className=" font-bold">{dayjs(pedido.created_at).fromNow()}</p>
						</div>
						<button
							className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
							type="button">
							Completar
						</button>
					</div>
				))}
			</div>
		</>
	);
}
