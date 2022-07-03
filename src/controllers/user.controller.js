import { getConnection, querys, sql } from "../database";

export const getUserByLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("password", sql.VarChar, password)
      .query(querys.getUserByLogin);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getUserById);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addNewUser = async (req, res) => {
  const { nombre,ape_paterno,ape_materno,telefono,correo_electronico,contrasenia,num_documento,IdEstadoUsuario,IdRol } = req.body;
  let fecha_registro=new Date();
  // validating
  if (nombre == null || ape_paterno==null || ape_materno==null || telefono==null || correo_electronico==null || contrasenia==null || num_documento==null || IdEstadoUsuario==null || IdRol==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("ape_paterno", sql.VarChar, ape_paterno)
      .input("ape_materno", sql.VarChar, ape_materno)
      .input("telefono", sql.Text, telefono)
      .input("fecha_registro", sql.Date, fecha_registro)
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("contrasenia", sql.VarChar, contrasenia)
      .input("num_documento", sql.VarChar, num_documento)
      .input("IdEstadoUsuario", sql.Int, IdEstadoUsuario)
      .input("IdRol", sql.Int, IdRol)
      .query(querys.addNewUser);
      

    res.json({ nombre,ape_paterno,ape_materno,telefono,fecha_registro,correo_electronico,contrasenia,num_documento,IdEstadoUsuario,IdRol });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
