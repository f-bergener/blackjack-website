"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require("express").Router();
router.use("/users", require("./users"));
module.exports = router;
router.use(function (req, res, next) {
    var error = new Error("Not found");
    // error.status = 404;
    next(error);
});
