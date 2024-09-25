/** @format */

import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<h1 className="text-4xl font-black"> Iniciar Sesión</h1>
			<p>Para realizar pedidos, primero debes iniciar sesión</p>

			<div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
				<form action="">
					<div className="mb-4">
						<label className="text-slate-800" htmlFor="email">
							Email:
						</label>
						<input
							type="email"
							id="email"
							className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
							name="email"
							placeholder="Tu Email"
						/>
					</div>

					<div className="mb-4">
						<label className="text-slate-800" htmlFor="password">
							Contraseña:
						</label>
						<input
							type="password"
							id="password"
							className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
							name="password"
							placeholder="Escribe una contraseña segura"
						/>
					</div>

					<input
						type="submit"
						value={"Iniciar Sesión"}
						className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl "
					/>
				</form>
			</div>

			<nav className="mt-5 text-sm text-gray-500 hover:bg-amber-400">
				<Link to="/auth/registro">¿No tienes cuenta? Registrate Aquí</Link>
			</nav>
		</>
	);
}
