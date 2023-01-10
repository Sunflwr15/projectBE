import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;
const Car = db.define(
  "carInfo",
  {
    carName: { type: DataTypes.STRING, allowNull: false },
    carType: { type: DataTypes.STRING, allowNull: false, },
    carColor: { type: DataTypes.STRING, allowNull: false },
    plateNumber: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  },
  {
    freezeTableName: true,
  }
);

export default Car;

(async () => {
  db.sync();
})();
