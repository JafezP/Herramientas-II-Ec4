import { ChevronRight, Pencil, Eye, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

const Sidebar = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBalance = () => setShowBalance((prev) => !prev);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!usuario?.id) return;

        const usuarioId = usuario.id;
        const response = await axios.get(`api/cuentas/usuario/${usuarioId}`);
        setAccounts(response.data);
      } catch (error) {
        console.error("Error al cargar las cuentas del usuario", error);
      }
    };
    fetchAccounts();
  }, []);

  return (
    <>
      {/* Botón flotante para móviles */}
      <button
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-500 rounded-full text-white shadow-lg lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white w-72 border-r border-gray-200 p-4 z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:block`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Mis productos</h2>
        </div>

        <nav className="grid gap-3 mt-4">
          <Link
            to="/free-account"
            className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-22 rounded-lg p-4 shadow"
          >
            <div className="flex flex-col">
              <span className="font-semibold">Cuenta Free</span>
              <span className="text-lg text-gray-800">
                {showBalance ? (
                  (() => {
                    const freeAccount = accounts.find(
                      (acc) => acc.tipoCuenta === "Ahorros"
                    );
                    return freeAccount
                      ? Number(freeAccount.saldo).toLocaleString("es-PE", {
                          style: "currency",
                          currency: "PEN",
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
            className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-22 rounded-lg p-4 shadow"
          >
            <div className="flex flex-col">
              <span className="font-semibold">Cuenta Sueldo *</span>
              <span className="text-lg text-gray-800">
                {showBalance ? (
                  (() => {
                    const sueldoAccount = accounts.find(
                      (acc) => acc.tipoCuenta === "Sueldo"
                    );
                    return sueldoAccount
                      ? Number(sueldoAccount.saldo).toLocaleString("es-PE", {
                          style: "currency",
                          currency: "PEN",
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
            className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg p-4 shadow"
          >
            <span className="font-semibold text-blue-500">Ver productos</span>
            <ChevronRight className="w-7 h-7 stroke-blue-500" />
          </Link>
        </nav>

        <div className="mt-4 flex justify-between">
          <button
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleBalance}
          >
            <Eye className="w-5 h-5 stroke-blue-500" />
            <span className="text-sm text-blue-500 font-semibold">Mostrar</span>
          </button>
          <button className="flex items-center gap-1 cursor-pointer">
            <Pencil className="w-5 h-5 stroke-blue-500" />
            <span className="text-sm text-blue-500 font-semibold">Editar</span>
          </button>
        </div>
      </aside>

      {isOpen && (
      <div
  className="fixed inset-0 bg-black/30 z-30 cursor-pointer lg:hidden"
  onClick={toggleSidebar}
/>
    )}
    </>
  );
};

export default Sidebar;
