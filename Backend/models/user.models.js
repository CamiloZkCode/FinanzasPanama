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

const obtenerUsuariosxAdmin = async (id_administrador) => {
  const [rows] = await db.query(
    `
    SELECT 
      id_usuario AS id,
      nombre,
      telefono,
      correo,
      username,
      id_rol,
      id_administrador
    FROM usuarios
    WHERE 
      (id_rol = 2 AND id_administrador = ?) -- Supervisores del admin
      OR 
      (id_rol = 3 AND id_administrador IN (
          SELECT id_usuario FROM usuarios 
          WHERE id_rol = 2 AND id_administrador = ?
      )) -- Vendedores cuyos supervisores pertenecen al admin
    `,
    [id_administrador, id_administrador]
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
