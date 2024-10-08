/** @format */

import { createRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
	const emailRef = createRef();
	const passwordRef = createRef();

	const [errores, setErrores] = useState([]);
	const { login } = useAuth({
		middleware: "guest",
		url: "/",
	});

	// Usar useEffect para limpiar los errores después de 3 segundos
	useEffect(() => {
		if (errores.length > 0) {
			const timer = setTimeout(() => setErrores([]), 3000);
			return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente o cambien los errores
		}
	}, [errores]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const datos = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		login(datos, setErrores);
	};

	return (
		<>
			<h1 className="text-4xl font-black"> Iniciar Sesión</h1>
			<p>Para realizar pedidos, primero debes iniciar sesión</p>

			<div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
				<form onSubmit={handleSubmit}>
					{/* Validación de los errores */}
					{errores
						? errores.map((error, i) => <Alerta key={i}> {error}</Alerta>)
						: null}

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
							ref={emailRef}
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
							ref={passwordRef}
						/>
					</div>

					<input
						type="submit"
						value={"Iniciar Sesión"}
						className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-xl "
					/>
				</form>
			</div>

			<nav className="mt-5 text-sm text-gray-500 hover:bg-amber-100 rounded-xl p-2">
				<Link to="/auth/registro">¿No tienes cuenta? Registrate Aquí</Link>
			</nav>
		</>
	);
}
