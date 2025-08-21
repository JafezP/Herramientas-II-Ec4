import { ArrowLeft, ArrowRight, Megaphone } from 'lucide-react';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import axios from '../../api/axios';

const Transfer = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [accounts, setAccounts] = useState([]);
  const [originAccount, setOriginAccount] = useState('');
  const [destinationAccounts, setDestinationAccounts] = useState([]);
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const usuarioId = usuario.id;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('api/transferir', {
        cuentaOrigenId: data.cuentaOrigen,
        cuentaDestinoId: data.cuentaDestino,
        monto: data.monto,
        moneda: data.moneda,
      });
      Swal.fire('Éxito', response.data, 'success');
      navigate('/');
    } catch (error) {
      Swal.fire(
        'Error',
        'Error al realizar la transferencia: ' + error.response.data,
        'error'
      );
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        if (!usuario?.id) return;

        const usuarioId = usuario.id;
        const response = await axios.get(`api/cuentas/usuario/${usuarioId}`);
        setAccounts(response.data);
      } catch (error) {
        console.error('Error al cargar las cuentas del usuario', error);
      }
    };

    fetchAccounts();
  }, []);

  useEffect(() => {
    if (originAccount) {
      const fetchDestinationAccounts = async () => {
        try {
          const response = await axios.get(
            `api/cuentas/destino/${originAccount}`
          );
          setDestinationAccounts(response.data);
        } catch (error) {
          console.error('Error al cargar cuentas destino', error);
        }
      };
      fetchDestinationAccounts();
    } else {
      setDestinationAccounts([]);
    }

    setValue('cuentaDestino', '');
  }, [originAccount, setValue]);

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center mt-8 px-4"
      >
        <div className="border border-gray-200 rounded-md shadow w-full max-w-md lg:max-w-lg p-6 lg:p-10 bg-white">
          <h1 className="font-black text-2xl">Transferir entre mis Cuentas</h1>
          <div className="w-7 border-t-2 border-red-700 mt-3 mb-3"></div>

          {/* Cuenta de origen */}
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs font-semibold">Cuenta de origen</label>
            <select
              {...register('cuentaOrigen', {
                required: 'Selecciona una cuenta',
              })}
              value={originAccount}
              onChange={(e) => setOriginAccount(Number(e.target.value))}
              className="border-b border-gray-500 text-gray-700 text-sm focus:outline-none pb-2"
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
            {errors.cuentaOrigen && (
              <span className="text-red-500 text-xs">
                {errors.cuentaOrigen.message}
              </span>
            )}
          </div>

          {/* Moneda y Monto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {/* Moneda */}
            <div>
              <p className="text-xs font-semibold pb-2">Moneda</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    value="soles"
                    {...register('moneda', {
                      required: 'Selecciona una moneda',
                    })}
                  />
                  Soles
                </label>
                <label className="flex items-center gap-1 text-sm text-gray-400">
                  <input type="radio" value="dolares" disabled />
                  Dólares
                </label>
              </div>
              {errors.moneda && (
                <span className="text-red-500 text-xs">
                  {errors.moneda.message}
                </span>
              )}
            </div>

            {/* Monto */}
            <div>
              <label className="text-xs font-semibold pb-2">Monto</label>
              <input
                type="number"
                placeholder="S/ 0.00"
                {...register('monto', {
                  required: 'Ingresa un monto',
                  min: { value: 50, message: 'El monto debe ser mayor a 50' },
                })}
                className="border-b border-gray-500 text-sm focus:outline-none pb-2 w-full"
              />
              {errors.monto && (
                <span className="text-red-500 text-xs">
                  {errors.monto.message}
                </span>
              )}
            </div>
          </div>

          {/* Cuenta destino */}
          <div className="grid grid-cols-1 gap-2 mt-5">
            <label className="text-xs font-semibold">Cuenta de destino</label>
            <select
              {...register('cuentaDestino', {
                required: 'Seleccione una cuenta',
              })}
              className="border-b border-gray-500 text-gray-700 text-sm focus:outline-none pb-2"
            >
              <option value="" disabled>
                Seleccione cuenta destino
              </option>
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

          {/* Información extra */}
          <div className="flex gap-4 mt-10 border-dashed border border-gray-200 rounded-md p-3">
            <Megaphone className="w-8 h-8 stroke-gray-300" />
            <p className="text-sm">
              <strong>¡Sigue ahorrando y alcanza tus objetivos! </strong>
              Conoce todos los beneficios de nuestras Cuentas de Ahorro aquí.
              <span className="block font-black text-blue-500 hover:underline cursor-pointer">
                Conoce más
              </span>
            </p>
          </div>

          {/* Botones */}
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer transform hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-8 h-8 stroke-blue-500 border border-blue-300 rounded-full" />
              Volver
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer transform hover:scale-105 transition-transform"
            >
              Transferir
              <ArrowRight className="w-8 h-8 stroke-blue-500 border border-blue-300 rounded-full" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Transfer;
