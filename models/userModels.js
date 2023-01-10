import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;
const User = db.define(
  "userInfo",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.INTEGER, allowNull: false },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    carName: { type: DataTypes.STRING, allowNull: false },
    carType: { type: DataTypes.STRING, allowNull: false },
    carColor: { type: DataTypes.STRING, allowNull: false },
    plateNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    address: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  db.sync();
})();
