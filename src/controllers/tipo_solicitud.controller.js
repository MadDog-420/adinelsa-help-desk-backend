import { getConnection, querys, sql } from "../database";
export const getTipoSolicitud = async (req,res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTipoSolicitud);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}