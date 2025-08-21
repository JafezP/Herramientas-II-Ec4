import { ChevronRight, CircleDashed } from 'lucide-react';
import axios from '../../api/axios';
import { useState, useEffect } from 'react';

const FreeAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const usuarioId = usuario?.id;

  if (!usuarioId) {
    console.error('No hay usuario logueado o no tiene id');
    return;
  }

  // Cargar cuentas
  useEffect(() => {
    if (!usuarioId) return;

    const fetchAccounts = async () => {
      try {
        const response = await axios.get(`api/cuentas/usuario/${usuarioId}`);
        setAccounts(response.data);

        const ahorros = response.data.find(
          (acc) => acc.tipoCuenta === 'Ahorros'
        );
        if (ahorros) setSelectedAccountId(ahorros.id);
      } catch (error) {
        console.error('Error al cargar las cuentas del usuario', error);
      }
    };

    fetchAccounts();
  }, [usuarioId]);

  // Cargar transacciones cuando se selecciona una cuenta
  useEffect(() => {
    if (!selectedAccountId || !usuarioId) return;

    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `api/transferencias/${selectedAccountId}?usuarioId=${usuarioId}`
        );
        const salientes = response.data.filter(
          (t) => t.cuentaOrigenId === selectedAccountId
        );
        setTransactions(salientes);
      } catch (error) {
        console.error('Error al cargar las transacciones', error);
      }
    };

    fetchTransactions();
  }, [selectedAccountId, usuarioId]);

  return (
    <div className="px-4 sm:px-10 py-6 min-h-screen flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {/* Tarjeta Cuenta Free */}
          <div className="bg-white border border-gray-200 rounded-md p-4">
            <h1 className="font-semibold text-lg mb-2">Cuenta Free</h1>
            {accounts
              .filter((acc) => acc.tipoCuenta === 'Ahorros')
              .map((acc) => (
                <div key={acc.id} className="mb-3">
                  <h2 className="font-semibold text-xl">
                    S/. {acc.saldo.toFixed(2)}
                  </h2>
                  <p className="text-sm text-gray-600">Saldo Disponible</p>
                  <p className="text-sm text-gray-600">Cta. Free</p>
                </div>
              ))}
            <div className="text-sm mb-2">
              <span className="font-medium">Scotiabank: </span>080-7311757
            </div>
            <div className="text-sm mb-3">
              <span className="font-medium">CCI: </span>009-233-17780733557-22
            </div>
            <div className="flex justify-between items-center mt-3 border-t border-gray-200 pt-2">
              <span className="font-semibold text-blue-600">
                Beneficios y más información
              </span>
              <ChevronRight className="w-6 h-6 stroke-blue-600" />
            </div>
          </div>

          {/* Tarjeta El mes pasado */}
          <div className="bg-white border border-gray-200 rounded-md p-4">
            <h1 className="font-semibold text-lg mb-2">
              El mes pasado utilizaste:
            </h1>
            <div className="flex justify-between items-center mb-3">
              <div>
                <h2 className="font-semibold text-xl">S/. 0.00</h2>
                <p className="text-sm text-gray-600">Del 01 jul. al 31 jul.</p>
              </div>
              <CircleDashed className="w-10 h-10 stroke-blue-600" />
            </div>
            <div className="text-center border-t border-gray-200 pt-5 pb-5">
              <span className="text-sm text-gray-500">
                El mes pasado no realizaste operaciones
              </span>
            </div>
          </div>
        </div>

        {/* Lista de transacciones */}
        <div className="mt-10 w-full">
          <h2 className="font-semibold text-xl mb-4 text-center md:text-left">
            Transacciones recientes
          </h2>

          {transactions.length === 0 ? (
            <p className="text-sm text-gray-500 text-center">
              No hay transacciones.
            </p>
          ) : (
            <div className="flex flex-col gap-3 mt-3">
              {transactions.map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-gray-200 rounded-md p-4 w-full"
                >
                  <p>
                    <span className="font-semibold">Fecha: </span>
                    {new Date(t.fecha).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Tipo: </span>
                    {t.tipo}
                  </p>
                  <p>
                    <span className="font-semibold">Monto: </span>S/.{' '}
                    {t.monto.toFixed(2)}
                  </p>
                  <p>
                    <span className="font-semibold">Origen: </span>
                    {t.cuentaOrigen}
                  </p>
                  <p>
                    <span className="font-semibold">Destino: </span>
                    {t.cuentaDestino}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeAccount;
