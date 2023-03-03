import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.js";
import { Personajes } from "./views/personajes.js";
import { Vehiculos } from "./views/vehiculos.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Planetas } from "./views/planeta.js";
import { Login } from "./component/login.jsx";
import { Singup } from "./component/singup.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:category/:theid" element={<Personajes />} />
						<Route path="/planeta/:theid" element={<Planetas />} />
						<Route path="/login/" element={<Login />} />
						<Route path="/singup" element={<Singup />} />
						<Route path="/vehiculos/:theid" element={<Vehiculos />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
