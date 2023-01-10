import { Sequelize } from "sequelize";
const DB = {
  database: "railway",
  username: "root",
  password: "vNbcLE01ZR56M3mPntlT",
  host: "containers-us-west-54.railway.app",
};
const db = new Sequelize(DB.database, DB.username, DB.password, {
  host: DB.host,
  dialect: "mysql",
  port: 5661
});
export default db;
