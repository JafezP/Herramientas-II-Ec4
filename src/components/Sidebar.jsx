import { ChevronRight, Pencil, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

const Sidebar = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("api/cuentas");
        setAccounts(response.data);
      } catch (error) {
        console.error("Error al cargar las cuentas", error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <aside className="grid items-start gap-4 w-fit border-r-gray-200 border-r bg-white h-120">
      <div className="bg-white p-4 w-68 border-b-gray-200 border-b">
        <h2 className="pl-2 text-lg font-semibold">Mis productos</h2>
      </div>

      <nav className="grid gap-3 w-68 place-items-center">
      <Link
          to="/free-account"
          className="flex items-center gap-2 text-sm border-gray-200 border w-55 h-22 rounded-lg justify-between p-4 shadow"
        >
          <div className="flex flex-col">
            <span className="p-1 font-semibold">Cuenta Free</span>
            <span className="p-1 text-lg text-gray-800">
              {showBalance ? (
                (() => {
                  const freeAccount = accounts.find(acc => acc.tipoCuenta === "Ahorros");
                  return freeAccount
                    ? Number(freeAccount.saldo).toLocaleString("es-PE", {
                        style: "currency",
                        currency: "PEN"
                      })
                    : "No disponible";
                })()
              ) : (
                <span className="font-bold">******</span>
              )}
            </span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-blue-500" />
        </Link>

        <Link
          to="/salary-account"
          className="flex items-center gap-2 text-sm border-gray-200 border w-55 h-22 rounded-lg justify-between p-4 shadow"
        >
          <div className="flex flex-col">
            <span className="p-1 font-semibold">Cuenta Sueldo *</span>
            <span className="p-1 text-lg text-gray-800">
            {showBalance ? (
                (() => {
                  const sueldoAccount = accounts.find(acc => acc.tipoCuenta === "Sueldo");
                  return sueldoAccount
                    ? Number(sueldoAccount.saldo).toLocaleString("es-PE", {
                        style: "currency",
                        currency: "PEN"
                      })
                    : "No disponible";
                })()
              ) : (
                <span className="font-bold">******</span>
              )}
            </span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-blue-500" />
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-2 text-sm border-gray-200 border w-55 h-15 rounded-lg justify-between p-4 shadow"
        >
          <span className="p-1 font-semibold text-blue-500">Ver productos</span>
          <ChevronRight className="w-7 h-7 stroke-blue-500" />
        </Link>
      </nav>

      <div className="p-4 w-68 flex justify-between">
        <button
          className="flex items-center gap-1 cursor-pointer"
          onClick={toggleBalance}
        >
          <Eye className="w-5 h-5 stroke-blue-500" />
          <span className="text-sm text-blue-500 font-semibold">Mostrar</span>
        </button>
        <button className="hide flex items-center gap-1 cursor-pointer">
          <Pencil className="w-5 h-5 stroke-blue-500" />
          <span className="text-sm text-blue-500 font-semibold">Editar</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
