import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const { User } = require("../db/index");

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({ token: await User.authenticate(req.body) });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    try {
      const user = await User.create({
        username,
        email,
        password,
      });
      res.send({ token: await user.generateToken() });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
