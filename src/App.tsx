import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullPageLoader from "./components/fullPageLoader";

const Nav = lazy(() => import("./components/nav"));

import "./app.css";
import "./app.less";

function App() {
	return (
		<Suspense fallback={<FullPageLoader />}>
			<Router>
				<Nav />
				<Routes></Routes>
			</Router>
		</Suspense>
	);
}

export default App;
