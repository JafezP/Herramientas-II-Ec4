import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Transfer from "./pages/Transfer/Transfer";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layout/Layout";
import FreeAccount from "./pages/Account/FreeAccount";
import SalaryAccount from "./pages/Account/SalaryAccount";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Routes>
      {/* Login no requiere autenticación */}
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="free-account" element={<FreeAccount />} />
        <Route path="salary-account" element={<SalaryAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Rutas sueltas protegidas */}
      <Route
        path="/transfer"
        element={
          <PrivateRoute>
            <Transfer />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
