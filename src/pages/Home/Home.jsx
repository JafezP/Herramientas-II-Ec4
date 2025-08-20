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
    <>
      <div className="w-130 grid items-center pl-10 pr-10 h-110">
        <h1 className="text-lg font-black pt-1">Quiero</h1>

        <Link
          to="/transfer"
          className="flex items-center gap-2 text-sm border-gray-200 border h-15 rounded-lg justify-between pr-3 pl-5 bg-white"
        >
          <div className="flex gap-2 items-center">
            <HandCoins className="stroke-amber-500" />
            <span className="font-semibold">Transferir</span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-gray-400" />
        </Link>

        <Link
          to="/cuentaFree"
          className="flex items-center gap-2 text-sm border-gray-200 border h-15 rounded-lg justify-between pr-3 pl-5 bg-white"
        >
          <div className="flex gap-2 items-center">
            <Banknote className="stroke-red-400" />
            <span className="font-semibold">Pagar</span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-gray-400" />
        </Link>

        <Link
          to="/cuentaFree"
          className="flex items-center gap-2 text-sm border-gray-200 border h-15 rounded-lg justify-between pr-3 pl-5 bg-white"
        >
          <div className="flex gap-2 items-center">
            <CircleDollarSign className="stroke-blue-500" />
            <span className="font-semibold">Cambiar Dólares</span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-gray-400" />
        </Link>

        <Link
          to="/cuentaFree"
          className="flex items-center gap-2 text-sm border-gray-200 border h-15 rounded-lg justify-between pr-3 pl-5 bg-white"
        >
          <div className="flex gap-2 items-center">
            <Wallet className="stroke-blue-700" />
            <span className="font-semibold">Retirar sin Tarjéta</span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-gray-400" />
        </Link>

        <Link
          to="/cuentaFree"
          className="flex items-center gap-2 text-sm border-gray-200 border h-15 rounded-lg justify-between pr-3 pl-5 bg-white"
        >
          <div className="flex gap-2 items-center">
            <ShoppingCart className="stroke-red-400" />
            <span className="font-semibold">Adquirir Productos</span>
          </div>
          <ChevronRight className="w-7 h-7 stroke-gray-400" />
        </Link>
      </div>

      <div className="w-150 h-100">
        <h1 className="text-lg font-bold pt-5">Mi Lista</h1>
        <div className="flex items-center justify-center mt-2">
          <div className="h-75 text-center p-5 border-2 border-gray-200 rounded bg-white mx-auto flex flex-col items-center justify-center">
            <h1 className="font-black text-lg p-2">
              Paga y transfiere más fácil y rápido
            </h1>

            <div className="border-b-4 border-red-500 w-16 h-1 mb-4"></div>

            <p className="mt-2 text-sm p-2">
              Si guardas tus pagos y transferencias frecuentes en Mi Lista,
              podrás verlos y realizarlos desde aquí.
            </p>

            <button
              type="submit"
              className="font-black rounded-full px-8 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-5 cursor-pointer"
            >
              Ver Mi Lista
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
