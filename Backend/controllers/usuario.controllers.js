const Usuario = require('../models/user.models');

const getUsuarios = (req, res) => {
  Usuario.getAllUsuarios((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

module.exports = {
  getUsuarios,
};