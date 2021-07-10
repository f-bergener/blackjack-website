"use strict";
var Sequelize = require("sequelize");
var pkgJSON = require("../../package.json");
var databaseName = pkgJSON.name;
var db = new Sequelize("postgres://localhost:5432/" + databaseName);
module.exports = db;
