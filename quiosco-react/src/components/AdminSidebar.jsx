/** @format */
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminSidebar() {
	const { logout } = useAuth({ middleware: "auth" });

	return (
		<aside className="md:w-72 h-screen">
			<div className="p-4">
				<img src="/img/logo.svg" alt="Imagen Logotipo" className="w-40" />
			</div>

			<nav className="flex flex-col p-4">
				<Link
					to={"/admin"}
					className="font-bold font-lg mb-5 hover:bg-amber-400 p-5 rounded-lg">
					Ordenes
				</Link>

				<Link
					to={"/productos"}
					className="font-bold font-lg hover:bg-amber-400 p-5 rounded-lg">
					Productos
				</Link>
			</nav>

			<div className="my-5 px-5">
				<button
					type="button"
					className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate rounded"
					onClick={logout}>
					Cerrar Sesión
				</button>
			</div>
		</aside>
	);
}
