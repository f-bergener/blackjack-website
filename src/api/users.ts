import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const { User } = require("../db/users");

module.exports = router;

// Get all users
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    if (!users.length) {
      next({ status: 500, message: "No users" });
    }
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Create a user
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
      const user = await User.create({req.body})
  } catch (error) {
    next(error);
  }
});
