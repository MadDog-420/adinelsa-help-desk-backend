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