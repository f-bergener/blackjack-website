import { Request, Response, NextFunction } from "express";
const router = require("express").Router();

router.use("/users", require("./users"));

module.exports = router;

router.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error("Not found");
  // error.status = 404;
  next(error);
});
