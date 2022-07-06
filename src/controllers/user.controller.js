const bcrypt = require('bcryptjs');
import { getConnection, querys, sql } from "../database";

export const getUserByLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ msg: `Missing ${!email ? "email" : 'password'}!` })
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(querys.getUserByEmail);

    const hashedContrasenia = await bcrypt.hash(password, 10);
    const user = result.recordset[0];

    if(user) {
      
      const validPass = await bcrypt.compare(password, user.contrasenia);
      
      if(validPass) {
        res.json({ id: user.IdUsuario });
      } else {
        res.status(400);
        res.json({ msg: 'Contraseña incorrecta' });
      }
    }

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
  const { nombre,ape_paterno,ape_materno,telefono,correo_electronico,contrasenia,num_documento,IdEstadoUsuario = 2,IdDocumento, IdRol = 1 } = req.body;
  const fecha=Date.now();
  const fecha_registro=new Date(fecha);
  // validating
  if (nombre == null || ape_paterno==null || ape_materno==null || telefono==null || correo_electronico==null || contrasenia==null || num_documento==null || IdEstadoUsuario==null ||
    IdDocumento==null || IdRol==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  const hashedContrasenia = await bcrypt.hash(contrasenia, 10);

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("ape_paterno", sql.VarChar, ape_paterno)
      .input("ape_materno", sql.VarChar, ape_materno)
      .input("telefono", sql.Text, telefono)
      .input("fecha_registro", sql.Date, fecha_registro.toUTCString())
      .input("correo_electronico", sql.VarChar, correo_electronico)
      .input("contrasenia", sql.VarChar, hashedContrasenia)
      .input("num_documento", sql.VarChar, num_documento)
      .input("IdEstadoUsuario", sql.Int, IdEstadoUsuario)
      .input("IdDocumento",sql.Int,IdDocumento)
      .input("IdRol", sql.Int, IdRol)
      .query(querys.addNewUser);
      

    res.json({ email: correo_electronico });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getUsuarios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};