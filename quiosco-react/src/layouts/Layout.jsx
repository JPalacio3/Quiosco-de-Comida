/** @format */
import { Outlet } from "react-router-dom";

export default function layout() {
	return (
		<div>
			Layout
			<Outlet />
		</div>
	);
}
