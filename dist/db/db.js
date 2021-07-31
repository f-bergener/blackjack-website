"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var pkgJSON = require("../../package.json");
var databaseName = pkgJSON.name;
var db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/" + databaseName);
module.exports = db;
