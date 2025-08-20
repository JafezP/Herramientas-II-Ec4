import { ArrowLeft, ArrowRight, Megaphone } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import axios from "../../api/axios";

const Transfer = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [accounts, setAccounts] = useState([]);
  const [originAccount, setOriginAccount] = useState("");
  const [destinationAccounts, setDestinationAccounts] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/transferir", {
        cuentaOrigenId: data.cuentaOrigen,
        cuentaDestinoId: data.cuentaDestino,
        monto: data.monto,
        moneda: data.moneda,
      });
      alert(response.data);
      navigate("/");
    } catch (error) {
      alert("Error al realizar la transferencia: " + error.response.data);
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("api/cuentas");
        setAccounts(response.data);
        setDestinationAccounts(response.data);
      } catch (error) {
        console.error("Error al cargar las cuentas", error);
      }
    };
    fetchAccounts();
  }, []);

  useEffect(() => {
    if (originAccount) {
      const selectedAccount = accounts.find(acc => acc.id === originAccount);
      if (selectedAccount) {
        const targetType =
          selectedAccount.tipoCuenta === "Ahorros" ? "Sueldo" : "Ahorros";
        setDestinationAccounts(
          accounts.filter(
            acc =>
              acc.tipoCuenta === targetType &&
              acc.id !== originAccount
          )
        );
      }
    } else {
      setDestinationAccounts(accounts);
    }
  
    setValue("cuentaDestino", "");
  }, [originAccount, accounts, setValue]);;


  return (
    <>
      <Header />
      <main>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center mt-8"
        >
          <div className="border-1 border-gray-200 rounded-md shadow w-150 p-10">
            <div>
              <h1 className="font-black text-2xl">
                Transferir entre mis Cuentas
              </h1>
              <div className="border-1 w-7 border-red-700 mt-3 mb-3"></div>
            </div>
            {/* Cuenta de origen */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-origen"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Cuenta de origen
              </label>
              <select
                  {...register("cuentaOrigen", {
                    required: "Selecciona una cuenta",
                  })}
                  value={originAccount}
                  onChange={(e) => setOriginAccount(Number(e.target.value))}
                  className="pb-2 border-b-1 border-b-gray-500 text-gray-500 focus:outline-none text-sm"
                  id="cuenta-origen"
                >
                  <option value="" disabled>
                    Seleccione cuenta
                  </option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.tipoCuenta}
                    </option>
                  ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div>
                <p className="text-xs font-semibold pb-2">Moneda</p>
                <div className="flex items-center">
                  <div className="pb-2">
                    <input
                      type="radio"
                      value="soles"
                      {...register("moneda", {
                        required: "Selecciona una moneda",
                      })}
                      className="mr-2"
                      id="soles"
                    />
                    <label className="mr-2 ml-2 text-sm" htmlFor="soles">
                      Soles
                    </label>
                  </div>
                  <div className="pb-2">
                    <input
                      type="radio"
                      value="dolares"
                      disabled
                      className="mr-2 ml-2"
                      id="dolares"
                    />
                    <label
                      className="mr-2 ml-2 text-sm text-gray-400"
                      htmlFor="dolares"
                    >
                      Dólares
                    </label>
                  </div>
                </div>
                {errors.moneda && (
                  <span className="text-red-500 text-xs">
                    {errors.moneda.message}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 mb-5">
                <label className="text-xs font-semibold pb-2" htmlFor="monto">
                  Monto
                </label>
                <input
                  type="number"
                  placeholder="S/ 0.00"
                  id="monto"
                  {...register("monto", {
                    required: "Ingresa un monto",
                    min: {
                      value: 0.01,
                      message: "El monto debe ser mayor a 0",
                    },
                  })}
                  className="border-b-1 border-b-gray-500 pb-2 focus:outline-none text-sm"
                />
                {errors.monto && (
                  <span className="text-red-500 text-xs">
                    {errors.monto.message}
                  </span>
                )}
              </div>
            </div>
            {/* Cuenta de destino */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-destino"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Cuenta de destino
              </label>
              <select
                {...register("cuentaDestino", {required: "Seleccione una cuenta"})}
                className="pb-2 border-b-1 border-b-gray-500 text-gray-500 focus:outline-none text-sm"
                id="cuenta-destino"
              >
                {destinationAccounts.map((acc) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.tipoCuenta}
                  </option>
                ))}
              </select>
              {errors.cuentaDestino && (
                <span className="text-red-500 text-xs">
                  {errors.cuentaDestino.message}
                </span>
              )}
            </div>
            <div className="w-130 mt-10 flex flex-1/2 gap-5 border-dashed border-1 border-gray-200 rounded-md p-2">
              <Megaphone className="w-15 h-15 stroke-gray-300" />
              <p>
                <strong>¡Sigue ahorrando y alcanza tus objetivos! </strong>
                <span>
                  Conoce todos los beneficios de nuestras Cuentas de Ahorro
                  aquí.
                </span>
                <span className="block font-black text-blue-500 hover:underline cursor-pointer">
                  Conoce más
                </span>
              </p>
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
              <button
                type="submit"
                className="hide flex items-center gap-1 cursor-pointer"
              >
                <span className="text-sm text-blue-500 font-semibold">
                  Transferir
                </span>
                <ArrowRight className="w-10 h-10 stroke-blue-500 border-1 border-blue-300 rounded-full" />
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
export default Transfer;