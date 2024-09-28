/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QuioscoProvider } from "./context/QuioscoProvider";
import router from "./router";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<QuioscoProvider>
			<RouterProvider router={router} />
		</QuioscoProvider>
	</StrictMode>,
);
