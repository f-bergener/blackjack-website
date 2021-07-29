import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const { User } = require("../db/index");
const { getUser, isAdmin } = require("./middleware");

module.exports = router;

// Get all users
router.get(
  "/",
  // getUser,
  // isAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await User.findAll();
      if (!users.length) {
        next({ status: 500, message: "No users" });
      }
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

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
router.put(
  "/",
  getUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.user[0].dataValues.id;
      const data = { ...req.user[0].dataValues, ...req.body };
      const user = await User.update(data, { where: { id } });
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export {};
