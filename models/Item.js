const { sequelize } = require("../db.js");
const { db, Model, DataTypes } = require("sequelize");

// TODO - create a Item model
class Item extends Model {}

Item.init(
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.NUMBER,
    vegetarian: DataTypes.BOOLEAN,
  },
  {
    sequelize: db,
    modelName: "Item",
  }
);

module.exports = { Item };
