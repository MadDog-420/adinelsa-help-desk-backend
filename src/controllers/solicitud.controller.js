import { getConnection, querys, sql } from "../database";

export const getSolicitud = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getSolicitud);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const addNewSolicitud = async (req, res) => {
  const { Solicitud, DetalleSolicitud, IdUsuario, Imagen = null } = req.body;
  const fecha = Date.now();
  const FechaRegistro = new Date(fecha);

  // validating
  if (Solicitud == null || DetalleSolicitud==null  || IdUsuario==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("Solicitud", sql.VarChar, Solicitud)
      .input("DetalleSolicitud", sql.VarChar, DetalleSolicitud)
      .input("FechaRegistro", sql.Date, FechaRegistro.toUTCString())
      .input("IdUsuario",  sql.Int, IdUsuario)
      .input("Imagen",  sql.Text, Imagen)
      .query(querys.addNewSolicitud);

    res.status(200);
    res.json({ ok: true });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSolicitudById = async (req, res) => {
  const{id}=req.params;
  const pool = await getConnection();
  const result = await pool
  .request()
  .input("Id",id)
  .query(querys.getSolicitudById);
  res.send(result.recordset[0]);
};

export const updateSolicitudById = async (req, res) => {
  const { Solicitud, DetalleSolicitud, IdUsuario } = req.body;
  const {id} = req.params;
  // validating
  if (Solicitud == null || DetalleSolicitud==null || IdUsuario==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Solicitud", sql.VarChar, Solicitud)
      .input("DetalleSolicitud", sql.VarChar, DetalleSolicitud)
      .input("IdUsuario",sql.Int,IdUsuario)
      .input("IdSolicitud",sql.Int,id)
      .query(querys.updateSolicitudById);
    res.json({ Solicitud,DetalleSolicitud,IdUsuario});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};