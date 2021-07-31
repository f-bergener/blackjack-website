const Sequelize = require("sequelize");
const pkgJSON = require("../../package.json");

const databaseName = pkgJSON.name;

let config = {};

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  };
}

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);

module.exports = db;

export {};
