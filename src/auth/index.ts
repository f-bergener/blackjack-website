import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const { User } = require("../db/index");

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const token = await User.authenticate(req.body);
      res.send({ token });
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
      const token = await user.generateToken();
      res.send({ token });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/me", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const {
      email,
      username,
      totalHands,
      handsWon,
      handsPushed,
      totalMoves,
      correctMoves,
      bankroll,
    } = user[0].dataValues;
    const data = {
      email,
      username,
      totalHands,
      handsWon,
      handsPushed,
      totalMoves,
      correctMoves,
      bankroll,
    };
    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
