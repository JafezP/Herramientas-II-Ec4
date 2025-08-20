import { ArrowLeft, ArrowRight, Megaphone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";

const Transfer = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <Header />
      <main className="flex items-center justify-center mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center"
        >
          <div className="border border-gray-200 rounded-md shadow w-120 p-10">
            <div>
              <h1 className="font-black text-2xl">
                <img src="/logo.jpg" className="w-10 h-10" alt="" />
              </h1>
            </div>

            {/* USUARIO */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="usuario"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Usuario
              </label>
              <input
                type="text"
                className="pb-2 border-b border-b-gray-500 text-gray-500 focus:outline-none text-sm"
              />
            </div>

            {/* CONTRASEÑA */}
            <div className="grid grid-cols-1">
              <label
                htmlFor="cuenta-destino"
                className="pt-2 pb-2 text-xs font-semibold"
              >
                Contraseña
              </label>
              <input
                type="password"
                className="pb-2 border-b border-b-gray-500 text-gray-500 focus:outline-none text-sm"
              />
            </div>

            {/* Botones */}
            <div className="mt-10 w-full flex justify-center">
              <button
                type="button"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <span className="text-sm text-blue-500 font-semibold border pt-3 pb-3 pl-21 pr-21 hover:bg-blue-400">
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
