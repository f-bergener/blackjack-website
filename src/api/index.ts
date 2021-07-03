const router = require("express").Router();

router.use("/users", require("./users"));

module.exports = router;

router.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
