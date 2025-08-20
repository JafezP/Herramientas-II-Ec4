import { ChevronRight, CircleDashed } from "lucide-react";

const FreeAccount = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        <div className="w-80 h-70 m-5">
          <div className="p-3 pl-0">
            <h1 className="font-semibold">Cuenta Free</h1>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4 pb-0 bg-white">
            <h2 className="font-semibold">S/. 1,000.00</h2>
            <p className="text-sm pb-3">Saldo Disponible</p>
            <p className="text-sm">Cta. Free</p>
            <div>
              <span className="text-sm">Scotiabank: </span>
              <span className="text-sm">080-7311757</span>
            </div>
            <div>
              <span className="text-sm">CCI: </span>
              <span className="text-sm">009-233-17780733557-22</span>
            </div>
            <div className="flex justify-between items-center mt-3 border-t-1 border-gray-200 p-3">
              <span className="font-semibold text-blue-600">
                Beneficios y mas información
              </span>
              <ChevronRight className="w-7 h-7 stroke-blue-600" />
            </div>
          </div>
        </div>

        <div className="w-80 h-60 m-5">
          <div className="p-3 pl-0">
            <h1 className="font-semibold">El mes pasado utilizaste:</h1>
          </div>
          <div className="border-1 border-gray-200 rounded-md p-4 pb-0 bg-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">S/. 0.00</h2>
                <p className="text-sm pb-3">Del 01 jul. al 31 jul.</p>
              </div>
              <CircleDashed className="w-10 h-10 stroke-blue-600" />
            </div>

            <div className="text-center mt-3 border-t-1 border-gray-200 pt-5 pb-5">
              <span className="text-sm">
                El mes pasado no realizaste operaciones
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeAccount;
