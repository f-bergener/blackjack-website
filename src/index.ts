import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./api"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});

export {};
