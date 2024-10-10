/** @format */
import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resumen from "../components/Resumen";
import Sidebar from "../components/Sidebar";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

export default function layout() {
	// Solo pueden acceder usuarios autenticados
	useAuth({ middleware: "auth" });

	const { modal } = useQuiosco();

	return (
		<>
			<div className="md:flex">
				<Sidebar />

				<main className="flex-1 h-screen overflow-y-scroll scrollbar-hidden bg-gray-100 p-3">
					<Outlet />
				</main>

				<Resumen />
			</div>

			<Modal isOpen={modal} style={customStyles}>
				<ModalProducto />
			</Modal>

			<ToastContainer />
		</>
	);
}
