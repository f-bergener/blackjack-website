"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var pkgJSON = require("../../package.json");
var databaseName = pkgJSON.name;
var config = {};
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
var db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/" + databaseName, config);
module.exports = db;
