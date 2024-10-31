const { sequelize } = require("../db.js");
const { db, Model, DataTypes } = require("sequelize");

// TODO - create a Menu model
class Menu extends Model {}

Menu.init({
    title: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Menu",
  }
);

module.exports = { Menu };
