import { getConnection, querys, sql } from "../database";
export const getSLA = async (req,res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getSLA);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}