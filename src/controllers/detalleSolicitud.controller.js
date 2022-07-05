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
  .input("Codigo", id)
  .query(querys.getSolicitudById);
  res.send(result.recordset[0]);
};