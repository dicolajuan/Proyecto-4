export const Helper = {
  
  crearCliente: async (URL, cliente) => {
    return await fetch(URL, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  obtenerClientes: async (URL) => {
    const pedido = await fetch(URL);
    const respuesta = await pedido.json();
    return respuesta;
  },
  obtenerCliente: async (URL) => {
    const pedido = await fetch(URL);
    const respuesta = await pedido.json();
    return respuesta;
  },
  editarCliente: async (URL,cliente) => {
    return await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  eliminarCliente: async (URL,cliente) => {
    return await fetch(URL, {
      method: "DELETE",
      body: JSON.stringify(cliente)
    });
  },
};
