/** @format */
import useQuiosco from "../hooks/useQuiosco.js";
import Categoria from "./Categoria.jsx";
import { useAuth } from "../hooks/useAuth.js";

export default function Sidebar() {
	const { categorias } = useQuiosco();
	const { logout, user } = useAuth({ middleware: "auth" });

	return (
		<aside className="md:w-72 mh-20 ">
			<div className="p-4">
				<img className="w-40" src="img/logo.svg" alt="Imágen de Logotipo" />
			</div>

			<h3 className="text-xl text-yellow-500 ps-5 font-bold">
				😋 Hola {user?.name}😋
			</h3>

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
