import { Request, Response, NextFunction } from "express";
const { User } = require("../db/index");

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Hit getUser function ------------------------------------");
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  console.log("Hit isAdmin function ------------------------------------");
  try {
    if (!req.user.isAdmin) {
      return res.status(403).send("User is not an admin");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUser,
  isAdmin,
};
