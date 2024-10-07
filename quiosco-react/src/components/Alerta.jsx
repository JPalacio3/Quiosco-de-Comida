/** @format */

export default function Alerta({ children }) {
	return (
		<div className="text-center my-2 bg-red-500 text-white font-bold p-3 uppercase rounded-xl text-sm">
			{children}
		</div>
	);
}
