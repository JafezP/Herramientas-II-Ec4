import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Transaction from "./pages/Transaction/Transaction";
import Transfer from "./pages/Transfer/Transfer";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./layout/Layout";
import FreeAccount from "./pages/Account/FreeAccount";
import SalaryAccount from "./pages/Account/SalaryAccount";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="free-account" element={<FreeAccount />} />
        <Route path="salary-account" element={<SalaryAccount />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/transfer" element={<Transfer />} />
      <Route path="transaction" element={<Transaction />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

// npx prettier --write .

//Scaffold-DbContext "Data Source=DESKTOP-T81UHG4;Initial Catalog=idat_bank;Integrated Security=SSPI;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
