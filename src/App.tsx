import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FullPageLoader from "./components/fullPageLoader";
import "./app.css";
import "./app.less";
import PageNotFound from "./pages/pageNotFound";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute";
import { useAppDispatch } from "./hooks/useAddDispatch";
import { getCurrentUserHandler } from "./actions/auth.action";
import ViewSingleProperty from "./pages/properties/viewSingleProperty";

const Nav = lazy(() => import("./components/nav"));
const Properties = lazy(() => import("./pages/properties"));
const CreateNewProperty = lazy(() => import("./pages/properties/createNew"));
const Category = lazy(() => import("./pages/fields/components/Category"));
const Users = lazy(() => import("./pages/users"));
const Contacts = lazy(() => import("./pages/contacts"));
const Fields = lazy(() => import("./pages/fields"));

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCurrentUserHandler());
	}, []);

	return (
		<Suspense fallback={<FullPageLoader />}>
			<Router>
				<Nav />
				<Routes>
					<Route>
						<Route path="/" element={<Login />} />
						<Route path="*" element={<Navigate replace to="/404" />} />
					</Route>
					<Route element={<Fields />}>
						<Route path="/fields/category" element={<Category />} />
					</Route>
					<Route element={<ProtectedRoute />}>
						<Route path="/properties" element={<Properties />} />
						<Route path="/properties/create" element={<CreateNewProperty />} />
						<Route path="/properties/:uid" element={<ViewSingleProperty />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/users" element={<Users />} />
						<Route path="/fields" element={<Fields />} />
						<Route path="/404" element={<PageNotFound />} />
					</Route>
				</Routes>
			</Router>
		</Suspense>
	);
}

export default App;
