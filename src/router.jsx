import { createBrowserRouter as browserRouter, createRoutesFromElements as routes, Route } from "react-router-dom";
// Pages
import App from './App';
import Home from './pages/Home';
import Content from './pages/Content';
import Applications from './pages/Applications';
import NotFound from './pages/NotFound';

const router = browserRouter(
  routes(
    <Route path="/" errorElement={<NotFound />} element={<App />}>
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