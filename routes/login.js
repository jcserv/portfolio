const router = require("express").Router();
require("dotenv").config();

router.route("/").post((req, res) => {
  const password = req.body.password;
  if (password === process.env.password) {
    res.json("Success");
  } else {
    res.json("Failure");
  }
});

module.exports = router;
