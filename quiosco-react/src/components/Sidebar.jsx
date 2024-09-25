/** @format */

import { categorias } from "../data/categorias.js";
import Categoria from "./Categoria.jsx";

export default function Sidebar() {
	return (
		<aside className="md:w-72">
			<div className="p-4">
				<img className="w-40" src="img/logo.svg" alt="Imágen de Logotipo" />
			</div>

			<div className="mt-10">
				{categorias.map((categoria) => (
					<Categoria categoria={categoria} />
				))}
			</div>

			<div className="my-5 px-5">
				<button
					type="button"
					className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate rounded m-1">
					Cancelar Orden
				</button>
			</div>
		</aside>
	);
}
