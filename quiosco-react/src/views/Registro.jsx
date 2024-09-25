/** @format */

import { Link } from "react-router-dom";

export default function Registro() {
	return (
		<>
			<h1 className="text-4xl font-black"> Crea tu Cuenta</h1>
			<p>Crea tu cuenta llenando el siguiente formulario</p>

			<div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
				<form action="">
					<div className="mb-4">
						<label className="text-slate-800" htmlFor="name">
							Nombre:
						</label>
						<input
							type="text"
							id="name"
							className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
							name="name"
							placeholder="Tu Nombre"
						/>
					</div>

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

					<div className="mb-4">
						<label className="text-slate-800" htmlFor="password_confirmation">
							Repite tu Contraseña:
						</label>
						<input
							type="password"
							id="password_confirmation"
							className="mt-2 w-full p-3 bg-gray-50 rounded-xl"
							name="password_confirmation"
							placeholder="Repite tu Contraseña"
						/>
					</div>

					<input
						type="submit"
						value={"Crear Cuenta"}
						className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl "
					/>
				</form>
			</div>

			<nav className="mt-5 text-sm text-gray-500 hover:bg-amber-400">
				<Link to="/auth/login">¿Ya tienes cuenta? Inicia Sesión</Link>
			</nav>
		</>
	);
}
