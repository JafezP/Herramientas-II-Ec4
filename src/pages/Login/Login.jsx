import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import axiosInstance from "../../api/axios";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("api/usuarios/login", {
        email: data.usuario,
        contraseña: data.contraseña,
      });

      localStorage.setItem("usuario", JSON.stringify(response.data));

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: `¡Hola ${response.data.nombre}!`,
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error.response?.data || "Ocurrió un error inesperado",
      });
    }
  };

  return (
    <>
      <Header />

      <main className="flex justify-center items-center px-4 bg-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md"
        >
          <div className="border border-gray-200 rounded-md shadow mt-20 p-6 sm:p-10 bg-white">
            
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/logo.jpg"
                className="w-12 h-12 sm:w-16 sm:h-16"
                alt="Logo"
              />
            </div>

            {/* Usuario */}
            <div className="grid grid-cols-1 mt-4">
              <label className="pt-2 pb-2 text-xs font-semibold">Usuario</label>
              <input
                type="text"
                {...register("usuario", { required: true })}
                className="pb-2 border-b border-b-gray-500 text-gray-500 focus:outline-none text-sm"
              />
              {errors.usuario && (
                <span className="text-red-500 text-xs">Campo obligatorio</span>
              )}
            </div>

            {/* Contraseña */}
            <div className="grid grid-cols-1 mt-4">
              <label className="pt-2 pb-2 text-xs font-semibold">Contraseña</label>
              <input
                type="password"
                {...register("contraseña", { required: true })}
                className="pb-2 border-b border-b-gray-500 text-gray-500 focus:outline-none text-sm"
              />
              {errors.contraseña && (
                <span className="text-red-500 text-xs">Campo obligatorio</span>
              )}
            </div>

            {/* Botón login */}
            <div className="mt-6 w-full flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 w-full sm:w-auto cursor-pointer"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
