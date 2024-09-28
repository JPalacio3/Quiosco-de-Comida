/** @format */

import { createContext, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias.js";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
	const [categorias, setCategorias] = useState(categoriasDB);
	const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

	const handleCkickCategoria = (id) => {
		const categoria = categorias.filter((categoria) => categoria.id === id)[0];
		setCategoriaActual(categoria);
	};

	return (
		<QuioscoContext.Provider
			value={{
				categorias,
				categoriaActual,
				handleCkickCategoria,
			}}>
			{children}
		</QuioscoContext.Provider>
	);
};

export { QuioscoProvider };
export default QuioscoContext;
