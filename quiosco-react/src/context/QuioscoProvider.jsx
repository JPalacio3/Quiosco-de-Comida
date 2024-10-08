/** @format */

import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
	const [categorias, setCategorias] = useState([]);
	const [categoriaActual, setCategoriaActual] = useState({});
	const [modal, setModal] = useState(false);
	const [producto, setProducto] = useState({});
	const [pedido, setPedido] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const nuevoTotal = pedido.reduce(
			(total, producto) => producto.precio * producto.cantidad + total,
			0,
		);
		setTotal(nuevoTotal);
	}, [pedido]);

	const obtenerCategorias = async () => {
		try {
			const { data } = await clienteAxios("/api/categorias");
			setCategorias(data.data);
			setCategoriaActual(data.data[0]);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		obtenerCategorias();
	}, []);

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
				handleAgregarPedido,
				handleEditarCantidad,
				handleEliminarProductoPedido,
				total,
			}}>
			{children}
		</QuioscoContext.Provider>
	);
};

export { QuioscoProvider };
export default QuioscoContext;
