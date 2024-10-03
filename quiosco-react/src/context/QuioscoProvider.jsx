/** @format */

import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categorias.js";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
	const [categorias, setCategorias] = useState(categoriasDB);
	const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
	const [modal, setModal] = useState(false);
	const [producto, setProducto] = useState({});
	const [pedido, setPedido] = useState([]);

	const handleCkickCategoria = (id) => {
		const categoria = categorias.filter((categoria) => categoria.id === id)[0];
		setCategoriaActual(categoria);
	};

	const handleClickModal = () => {
		setModal(!modal);
	};

	const handleSetProducto = (producto) => {
		setProducto(producto);
	};

	const handleAgregarPedido = ({ categoria_id, ...producto }) => {
		if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
			const pedidoActualizado = pedido.map((pedidoState) =>
				pedidoState.id === producto.id ? producto : pedidoState,
			);
			setPedido(pedidoActualizado);
			toast.success("Pedido Actualizado Correctamente");
		} else {
			setPedido([...pedido, producto]);
			toast.success("Agregado al pedido");
		}
	};

	const handleEditarCantidad = (id) => {
		const productoActualizar = pedido.filter(
			(producto) => producto.id === id,
		)[0];
		setProducto(productoActualizar);
		setModal(!modal);
	};

	const handleEliminarProductoPedido = (id) => {
		const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
		setPedido(pedidoActualizado);
		toast.error("Producto Eliminado");
	};

	return (
		<QuioscoContext.Provider
			value={{
				categorias,
				categoriaActual,
				handleCkickCategoria,
				modal,
				handleClickModal,
				producto,
				handleSetProducto,
				pedido,
				setPedido,
				handleAgregarPedido,
				handleEditarCantidad,
				handleEliminarProductoPedido,
			}}>
			{children}
		</QuioscoContext.Provider>
	);
};

export { QuioscoProvider };
export default QuioscoContext;
