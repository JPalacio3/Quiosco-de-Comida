/** @format */
import useQuiosco from "../hooks/useQuiosco.js";
import Categoria from "./Categoria.jsx";
import { useAuth } from "../hooks/useAuth.js";

export default function Sidebar() {
	const { categorias } = useQuiosco();
	const { logout } = useAuth({ middleware: "auth" });

	return (
		<aside className="md:w-72 mr-2 ">
			<div className="p-4">
				<img className="w-40" src="img/logo.svg" alt="Imágen de Logotipo" />
			</div>

			<div className="mt-10">
				{categorias.map((categoria) => (
					<Categoria key={categoria.id} categoria={categoria} />
				))}
			</div>

			<div className="my-5 px-5">
				<button
					type="button"
					className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate rounded"
					onClick={logout}>
					Cancelar Orden
				</button>
			</div>
		</aside>
	);
}
