import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import Spinner from "../components/Spinner";
import { Helper } from "../helpers/Helper";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const obtenerClienteAPI = async () => {
    try {
      const clienteAPI = await Helper.obtenerCliente(
        `${Helper.URL_CLIENTES}/${id}`
      );
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
      {
        loading ? <Spinner/> 
        : ( 
            <>
              <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
              <p className="mt-3">Editar los datos del cliente</p>
            
              {cliente?.nombre ? <Formulario cliente={cliente}/> 
                : <p>Cliente inexistente</p> }
              
            </>
          )
      }
    </>
  );
};

export default EditarCliente;
