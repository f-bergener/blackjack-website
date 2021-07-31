const Sequelize = require("sequelize");
const pkgJSON = require("../../package.json");

const databaseName = pkgJSON.name;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`
);

module.exports = db;

export {};
