import {
  ChevronRight,
  HandCoins,
  Banknote,
  CircleDollarSign,
  Wallet,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 sm:px-10 py-6 min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-2 pl-10 pr-10 gap-20">
        
        {/* Sección Quiero */}
        <div>
          <h1 className="text-lg font-black mb-4">Quiero</h1>
          <div className="grid gap-3 grid-cols-1">
            <Link
              to="/transfer"
              className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg px-5 bg-white hover:shadow"
            >
              <div className="flex items-center gap-2">
                <HandCoins className="stroke-amber-500 w-5 h-5" />
                <span className="font-semibold">Transferir</span>
              </div>
              <ChevronRight className="w-5 h-5 stroke-gray-400" />
            </Link>

            <Link
              to="/cuentaFree"
              className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg px-5 bg-white hover:shadow"
            >
              <div className="flex items-center gap-2">
                <Banknote className="stroke-red-400 w-5 h-5" />
                <span className="font-semibold">Pagar</span>
              </div>
              <ChevronRight className="w-5 h-5 stroke-gray-400" />
            </Link>

            <Link
              to="/cuentaFree"
              className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg px-5 bg-white hover:shadow"
            >
              <div className="flex items-center gap-2">
                <CircleDollarSign className="stroke-blue-500 w-5 h-5" />
                <span className="font-semibold">Cambiar Dólares</span>
              </div>
              <ChevronRight className="w-5 h-5 stroke-gray-400" />
            </Link>

            <Link
              to="/cuentaFree"
              className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg px-5 bg-white hover:shadow"
            >
              <div className="flex items-center gap-2">
                <Wallet className="stroke-blue-700 w-5 h-5" />
                <span className="font-semibold">Retirar sin Tarjéta</span>
              </div>
              <ChevronRight className="w-5 h-5 stroke-gray-400" />
            </Link>

            <Link
              to="/cuentaFree"
              className="flex items-center justify-between gap-2 text-sm border border-gray-200 h-15 rounded-lg px-5 bg-white hover:shadow"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="stroke-red-400 w-5 h-5" />
                <span className="font-semibold">Adquirir Productos</span>
              </div>
              <ChevronRight className="w-5 h-5 stroke-gray-400" />
            </Link>
          </div>
        </div>

        {/* Sección Mi Lista */}
        <div>
          <h1 className="text-lg font-bold mb-4">Mi Lista</h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-full md:w-3/4 lg:w-full h-auto p-5 border-2 border-gray-200 rounded bg-white flex flex-col items-center justify-center text-center">
              <h1 className="font-black text-lg mb-2">
                Paga y transfiere más fácil y rápido
              </h1>

              <div className="border-b-4 border-red-500 w-16 h-1 mb-4"></div>

              <p className="mt-2 text-sm mb-4">
                Si guardas tus pagos y transferencias frecuentes en Mi Lista,
                podrás verlos y realizarlos desde aquí.
              </p>

              <button
                type="submit"
                className="font-black rounded-full px-8 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                Ver Mi Lista
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
