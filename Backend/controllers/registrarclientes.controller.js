const { crearCliente, obtenerClientesPorUsuario } = require('../models/cliente.model');

async function registrarClientes(req, res) {
  try {
    const nuevoCliente = req.body;
    nuevoCliente.creado_por = req.user.id_usuario;
    nuevoCliente.fecha_creacion = new Date();

    await crearCliente(nuevoCliente);
    res.status(201).json({ message: 'Cliente creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear el cliente' });
  }
}

async function listarMisClientes(req, res) {
  try {
    const clientes = await obtenerClientesPorUsuario(req.user.id_usuario);
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
}

module.exports = {
  registrarCliente,
  listarMisClientes,
};