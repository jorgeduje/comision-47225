import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes";
import ProtectedRoutes from "./ProtectedRoutes";


const AppRouter = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => {
          return <Route key={id} path={path} element={<Element />} />;
        })}

      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<h1>Este es el dashboard</h1>} />
        <Route path="/otracosa" element={<h1>Este es el otracosa</h1>} />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
