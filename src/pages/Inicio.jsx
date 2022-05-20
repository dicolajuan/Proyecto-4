import React, { useEffect, useState } from "react";
import Cliente from "../components/Cliente";
import { Helper } from "../helpers/Helper";

const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  const obtenerClientesAPI = async () => {
    try {
      const clientesAPI = await Helper.obtenerClientes(Helper.URL_CLIENTES);
      setClientes(clientesAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarClienteAPI = async (id,clientesActualizados) => {
    try {
      await Helper.eliminarCliente(`${Helper.URL_CLIENTES}/${id}`);
      setClientes(clientesActualizados);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerClientesAPI();
  }, []);

  const handleEliminar = (id) => {
    const clientesActualizados = clientes.filter((cliente) => cliente.id != id);
    const confirmar = confirm("Desea eliminar este cliente?");
    if (confirmar) {
      eliminarClienteAPI(id,clientesActualizados);
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
