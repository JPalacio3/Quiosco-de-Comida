/** @format */

import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function Resumen() {
	const { pedido } = useQuiosco();

	return (
		<aside className="w-72 overflow-y-scroll p-5 ">
			<h1 className="text-4xl font-black text-center">Mi Pedido</h1>

			<p className="text-lg my-5 text-center font-bold mt-5">
				Aquí Podrás Ver el Resumen y Totales de Tu Pedido
			</p>

			<div className="py-10">
				{pedido.length === 0 ? (
					<p className="text-center text-2xl uppercase text-indigo-600 font-black">
						No hay elementos en tu pedido aún
					</p>
				) : (
					<p>Si Hay Algo</p>
				)}
			</div>

			<p className="text-xl mt-10 text-indigo-700">
				Total:
				<span>{""}</span>
			</p>

			<form className="w-full">
				<div className="mt-5">
					<input
						className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
						type="submit"
						value={"Confirmar Pedido"}
					/>
				</div>
			</form>
		</aside>
	);
}
