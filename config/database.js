import { Sequelize } from "sequelize";
import mysql from "mysql";
const db = new Sequelize(
  "chargeradmindb",
  "gathfanlikesyou",
  "gathfanlikesyou15",
  {
    host: "db4free.net",
    dialect: "mysql",
  }
);
// const db = mysql.createPool({
//   host: "localhost",
//   user: "id20091991_admincharger",
//   password: "Nabilgathfan15_",
//   database: "id20091991_adminchargerdb",
//   multipleStatements: true,
// });
export default db;
