import { getConnection, querys, sql } from "../database";

export const getDetalleSolicitudAdmin = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getDetalleSolicitudAdmin);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getDetalleSolicitudByCode = async (req, res) => {
  const {id} = req.params;
  const pool = await getConnection();
  const result = await pool
  .request()
  .input("codigo", sql.VarChar, id)
  .query(querys.getDetalleSolicitudByCode);
  res.send(result.recordset[0] || {});
};

export const addDetalleSolicitud = async (req, res) => {
  const { idSolicitud, categoria, estado, clasificacion, impacto, prioridad, responsable, sla, actividadesSolucion = null, fechaSolucion = null } = req.body;
  const fecha = Date.now();
  const FechaActualizacion = new Date(fecha);

  // validating
  if (idSolicitud == null, categoria == null || estado==null  || clasificacion==null || impacto == null, prioridad==null, responsable==null, sla==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id", sql.Int, idSolicitud)
      .input("estado",  sql.Int, estado)
      .input("categoria",  sql.Int, categoria)
      .input("clasificacion",  sql.Int, clasificacion)
      .input("impacto", sql.Int, impacto)
      .input("prioridad", sql.Int, prioridad)
      .input("responsable", sql.Int, responsable)
      .input("sla", sql.Int, sla)
      .input("fechaActualizacion", sql.Date, FechaActualizacion.toUTCString())
      .input("detalleSolucion", sql.VarChar, actividadesSolucion)
      .input("fechaSolucion", sql.VarChar, fechaSolucion)
      .query(querys.addDetalleSolicitud);

    res.json({ id: idSolicitud });
    // res.json({ Solicitud, DetalleSolicitud, FechaRegistro, IdUsuario });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateDetalleSolicitud = async (req, res) => {
  const { id } = req.params;
  const { categoria, estado, clasificacion, impacto, prioridad, responsable, sla, actividadesSolucion = null } = req.body;

  const fecha = Date.now();
  const FechaActualizacion = new Date(fecha);

  // validating
  if (categoria == null || estado==null  || clasificacion==null || impacto == null, prioridad==null, responsable==null, sla==null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  let FechaSolucion = null;
  if (actividadesSolucion !== null) {
    FechaSolucion = FechaActualizacion;
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("estado",  sql.Int, estado)
      .input("categoria",  sql.Int, categoria)
      .input("clasificacion",  sql.Int, clasificacion)
      .input("impacto", sql.Int, impacto)
      .input("prioridad", sql.Int, prioridad)
      .input("responsable", sql.Int, responsable)
      .input("sla", sql.Int, sla)
      .input("fechaActualizacion", sql.Date, FechaActualizacion.toUTCString())
      .input("detalleSolucion", sql.VarChar, actividadesSolucion)
      .input("fechaSolucion", sql.VarChar, FechaSolucion && FechaSolucion.toUTCString())
      .query(querys.updateDetalleSolicitud);

    res.json({ id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};