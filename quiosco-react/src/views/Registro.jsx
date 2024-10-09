/** @format */

import { createRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";
import { LoadingAnimation } from "../components/Animation";

export default function Registro() {
	const nameRef = createRef();
	const emailRef = createRef();
	const passwordRef = createRef();
	const passwordConfirmationRef = createRef();

	const [isLoading, setIsLoading] = useState(false); // Estado para controlar la animación
	const [errores, setErrores] = useState([]);
	const { registro } = useAuth({ middleware: "guest", url: "/" });

	// Usar useEffect para limpiar los errores después de 3 segundos
	useEffect(() => {
		if (errores.length > 0) {
			const timer = setTimeout(() => setErrores([]), 3000);
			const timerLoading = setTimeout(() => setIsLoading(false), 500);
			return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente o cambien los errores
		}
	}, [errores]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const datos = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			password_confirmation: passwordConfirmationRef.current.value,
		};

		registro(datos, setErrores);
	};

	return (
		<>
			<h1 className="text-4xl font-black"> Crea tu Cuenta</h1>
			<p>Crea tu cuenta llenando el siguiente formulario</p>

			<div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
				<form action="" onSubmit={handleSubmit}>
					{/* Validación de los errores */}
					{errores
						? errores.map((error, i) => <Alerta key={i}> {error}</Alerta>)
						: null}

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
							ref={nameRef}
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
							ref={passwordConfirmationRef}
						/>
					</div>

					<input
						type="submit"
						value={"Crear Cuenta"}
						className={`
							${
								isLoading
									? "bg-gray-400 cursor-not-allowed"
									: "bg-indigo-600 hover:bg-indigo-800"
							}
							text-white w-full mt-5 p-3 uppercase font-bold rounded-xl
						`}
						disabled={isLoading} // Deshabilitar si isLoading es true
					/>
				</form>

				{/* Mostrar animación cuando isLoading es true */}
				{isLoading && (
					<div className="flex justify-center items-center mt-5 text-4xl">
						<LoadingAnimation />
					</div>
				)}
			</div>

			<nav className="mt-5 text-sm text-gray-500 hover:bg-amber-100 rounded-xl p-2">
				<Link to="/auth/login">¿Ya tienes cuenta? Inicia Sesión</Link>
			</nav>
		</>
	);
}
