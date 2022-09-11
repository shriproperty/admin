import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import FullPageLoader from "./components/fullPageLoader";
import Contacts from "./pages/contacts";
import "./app.css";
import "./app.less";
import store from "./store";

const Nav = lazy(() => import("./components/nav"));

function App() {
	return (
		<Provider store={store}>
			<Suspense fallback={<FullPageLoader />}>
				<Router>
					<Nav />
					<Routes>
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
				</Router>
			</Suspense>
		</Provider>
	);
}

export default App;
