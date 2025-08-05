const usuariosModel = require('../models/user.models');


const getSupervisores = async (req, res) => {
  try {
    const supervisores = await usuariosModel.obtenerSupervisores();
    res.status(200).json(supervisores);
  } catch (error) {
    console.error('Error al obtener supervisores:', error);
    res.status(500).json({ mensaje: 'Error del servidor al obtener supervisores' });
  }
};

const getUsuariosxAdmin = async (req, res) => {
  try {
    const { id_administrador } = req.body;

    console.log("ID ADMINISTRADOR recibido:", id_administrador); // <-- IMPORTANTE

    if (!id_administrador) {
      return res.status(400).json({ mensaje: 'Falta id_administrador' });
    }

    const usuarios = await usuariosModel.obtenerUsuariosxAdmin(id_administrador);
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener lista de usuarios:', error); // <-- DETALLES DEL ERROR
    res.status(500).json({ mensaje: 'Error del servidor al obtener lista de usuarios' });
  }
};





module.exports = {
  getUsuariosxAdmin,
  getSupervisores
  };