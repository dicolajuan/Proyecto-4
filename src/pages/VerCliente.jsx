import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Helper } from "../helpers/Helper";

const VerCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [loading, setLoading] = useState(true);

  const {VITE_URL_API} = import.meta.env;

  const obtenerClienteAPI = async () => {
    try {
      const clienteAPI = await Helper.obtenerCliente(
        `${VITE_URL_API}/${id}`
      );
      // console.log(clienteAPI);
      setCliente(clienteAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerClienteAPI();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Spinner/>
          {/* <div className="fixed top-1/2 left-2/4 right-1/4 bottom-1/2 text-center bg-gray-800">
            <CircularProgress />
          </div> */}
        </>
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <div>
          <h1 className="font-black text-4xl text-blue-900">Ver Cliente</h1>
          <p className="mt-2">Informacion del Cliente</p>

          <p className="text-2xl text-gray-700 mt-10">
            <span className="text-gray-800 uppercase font-bold">Cliente: </span>
            {cliente.nombre}
          </p>
          <p className="text-2xl text-gray-700 mt-4">
            <span className="text-gray-800 uppercase font-bold">Empresa: </span>
            {cliente.empresa}
          </p>
          <p className="text-2xl text-gray-700 mt-4">
            <span className="text-gray-800 uppercase font-bold">email: </span>
            {cliente.email}
          </p>
          <p className="text-2xl text-gray-700 mt-4">
            <span className="text-gray-800 uppercase font-bold">
              telefono:{" "}
            </span>
            {cliente.telefono}
          </p>
          {cliente.notas && (
            <p className="text-2xl text-gray-700 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas: </span>
              {cliente.notas}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default VerCliente;
