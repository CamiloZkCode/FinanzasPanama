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

module.exports = {
 
  getSupervisores
  };