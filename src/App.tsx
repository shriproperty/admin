import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullPageLoader from "./components/fullPageLoader";
import Contacts from "./pages/contacts";
import "./app.css";
import "./app.less";

const Nav = lazy(() => import("./components/nav"));

function App() {
	return (
		<Suspense fallback={<FullPageLoader />}>
			<Router>
				<Nav />
				<Routes>
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</Router>
		</Suspense>
	);
}

export default App;
