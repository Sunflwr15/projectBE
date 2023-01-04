import { Sequelize } from "sequelize";
const db = new Sequelize("chargerDB", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db
