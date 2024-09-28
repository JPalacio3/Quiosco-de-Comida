/** @format */
import { Outlet } from "react-router-dom";
import Resumen from "../components/Resumen";
import Sidebar from "../components/Sidebar";

export default function layout() {
	return (
		<div className="md:flex">
			<Sidebar />

			<main className="flex-1 h-screen overflow-y-scroll scrollbar-hidden bg-gray-100 p-3">
				<Outlet />
			</main>

			<Resumen />
		</div>
	);
}
