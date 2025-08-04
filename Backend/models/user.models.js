const db = require("../config/db");

const getAllUsuarios = (callback) => {
  db.query("SELECT * FROM usuarios", callback);
};

async function findUserByUsername(username) {
  const [rows] = await db.query("SELECT * FROM usuarios WHERE username = ?", [
    username,
  ]);
  return rows[0];
}

async function getRolById(id_rol) {
  const [rows] = await db.query("SELECT rol FROM roles WHERE id_rol = ?", [
    id_rol,
  ]);
  return rows[0]?.rol;
}

const obtenerSupervisores = async () => {
  const [rows] = await db.query(
    "SELECT id_usuario AS id, nombre FROM usuarios WHERE id_rol = 2"
  );
  return rows;
};

const obtenerUsuariosxAdmin = async (id_admin) => {
  const [rows] = await db.query(
    `
    SELECT    
      u1.id_usuario AS id,
      u1.nombre,
      u1.telefono,
      u1.correo,
      u1.username,
      u1.id_rol,
      u1.id_administrador,
      u1.id_supervisor
    FROM usuarios u1
    LEFT JOIN usuarios u2 ON u1.id_supervisor = u2.id_usuario
    WHERE    
      (u1.id_rol = 2 AND u1.id_administrador = ?)
      OR 
      (u1.id_rol = 3 AND u2.id_administrador = ?)
  `,
    [id_admin, id_admin]
  );

  return rows;
};

module.exports = {
  getAllUsuarios,
  findUserByUsername,
  getRolById,
  obtenerSupervisores,
  obtenerUsuariosxAdmin,
};
