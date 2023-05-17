import React from "react";
import { createBrowserRouter as browserRouter, createRoutesFromElements as routes, Route } from "react-router-dom";
// Pages
import App from './App';

/** Lazy load */
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));
const Content = React.lazy(() => import("./pages/Content"));
const Applications = React.lazy(() => import("./pages/Applications"));

const router = browserRouter(
	routes(
		<Route
			path="/"
			errorElement={<NotFound />}
			element={<App />}
		>
			{/* Default route */}
			<Route index element={<Home />} />

			{/* Pages */}
			<Route path="content" element={<Content />} />
			<Route path="applications" element={<Applications />} />

			{/* Fallback Route */}
			{/* Disabled */}
		</Route>
	)
);

export default router;