/** @format */

import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
	const { pedido, total, handleSubmitNuevaOrden } = useQuiosco();

	const comprobarPedido = () => pedido.length === 0;

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSubmitNuevaOrden();
	};

	return (
		<aside className="overflow-y-scroll p-5 w-full md:w-72">
			<h1 className="text-4xl font-black text-center">Mi Pedido</h1>

			<p className="text-lg my-5 text-center font-bold mt-5">
				Aquí Podrás Ver el Resumen y Totales de Tu Pedido
			</p>

			<div className="py-10">
				{pedido.length === 0 ? (
					<p className="text-center text-2xl">
						No hay elementos en tu pedido aún
					</p>
				) : (
					pedido.map((producto) => (
						<ResumenProducto key={producto.id} producto={producto} />
					))
				)}
			</div>

			<p className="text-xl mt-10 text-indigo-600 font-bold text-center uppercase">
				Total:
				<span className="text-amber-500 text-2xl font-black">
					{" "}
					{formatearDinero(total)}
				</span>
			</p>

			<form className="w-full" onSubmit={handleSubmit}>
				<div className="mt-5">
					<input
						className={`${
							comprobarPedido()
								? "bg-indigo-100 cursor-no-drop"
								: "bg-indigo-600 hover:bg-indigo-800"
						}
						px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
						type="submit"
						value={"Confirmar Pedido"}
						disabled={comprobarPedido()}
					/>
				</div>
			</form>
		</aside>
	);
}
