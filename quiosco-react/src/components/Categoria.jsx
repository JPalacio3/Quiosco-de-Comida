/** @format */
import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({ categoria }) {
	const { handleCkickCategoria, categoriaActual } = useQuiosco();
	const { icono, id, nombre } = categoria;

	return (
		<>
			<button
				className={`${
					categoriaActual.id === id
						? "bg-amber-400 scale-105 rounded-none m-0"
						: "bg-white"
				}
				flex items-center gap-4 border w-full p-3  m-1 hover:bg-amber-400 cursor-pointer rounded-md ransition-transform duration-300 ease-in-out hover:scale-105`}
				type="button"
				onClick={() => handleCkickCategoria(id)}>
				<img
					src={`/img/icono_${icono}.svg`}
					alt="Imagen de ícono"
					className="w-12"
				/>
				<p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
			</button>
		</>
	);
}
