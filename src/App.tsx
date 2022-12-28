import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import FullPageLoader from "./components/fullPageLoader";
import "./app.css";
import "./app.less";
import store from "./store";
import PageNotFound from "./pages/pageNotFound";

const Nav = lazy(() => import("./components/nav"));
const Properties = lazy(() => import("./pages/properties"));
const CreateNewProperty = lazy(() => import("./pages/properties/createNew"));
const Contacts = lazy(() => import("./pages/contacts"));
const Users = lazy(() => import("./pages/users"));

function App() {
	return (
		<Provider store={store}>
			<Suspense fallback={<FullPageLoader />}>
				<Router>
					<Nav />
					<Routes>
						<Route path="/properties" element={<Properties />} />
						<Route path="/properties/create" element={<CreateNewProperty />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/users" element={<Users />} />
						<Route path="/404" element={<PageNotFound />} />
						<Route path="*" element={<Navigate replace to="/404" />} />
					</Routes>
				</Router>
			</Suspense>
		</Provider>
	);
}

export default App;
