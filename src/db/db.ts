const Sequelize = require("sequelize");
const pkgJSON = require("../../package.json");

const databaseName = pkgJSON.name;

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`);

module.exports = db;
