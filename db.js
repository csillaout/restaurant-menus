const path = require("path");
const { Sequelize } = require("sequelize");

// TODO - connect to db via sequelize
const db = new Sequelize({
  dialect: "sqlite",
  logging: false,
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  db,
};
