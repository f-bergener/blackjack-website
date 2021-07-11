import { Request, Response, NextFunction } from "express";
import Sequelize from "sequelize";
const router = require("express").Router();
const { User } = require("../db/index");

module.exports = router;

// Get all users
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll();
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
    const data = req.body;
    const user = await User.create(data);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Update a user
router.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const user = await User.create(data);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

export {};
