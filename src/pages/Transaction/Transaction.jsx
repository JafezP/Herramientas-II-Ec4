import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";

const Transfer = () => {
  const destino = "Cuenta Sueldo";

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <main>
        <form className="flex items-center justify-center mt-8">
          <div className="border-1 border-gray-200 rounded-md shadow w-150 p-10">
            <div>
              <h1 className="font-black text-2xl">Detalle de transacción</h1>
              <div className="border-1 w-7 border-red-700 mt-3 mb-3"></div>
            </div>

            {/* Cuenta de origen */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-origen"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Cuenta de origen: <span className="font-normal">{destino}</span>
              </label>
            </div>

            {/* Cuenta de destino */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-destino"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Cuenta de destino:{" "}
                <span className="font-normal">969494480120484</span>
              </label>
            </div>

            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-destino"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Monto: <span className="font-normal">S/2000</span>
              </label>
            </div>

            {/* Botones */}
            <div className="flex justify-between mt-10">
              <button
                type="button"
                className="hide flex items-center gap-1 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-10 h-10 stroke-blue-500 border-1 border-blue-300 rounded-full" />
                <span className="text-sm text-blue-500 font-semibold">
                  Volver
                </span>
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Transfer;
