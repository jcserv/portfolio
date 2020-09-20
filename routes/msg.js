const router = require("express").Router();
let Msg = require("../model/msg.model");

router.route("/").get((req, res) => {
  Msg.find({})
    .then((msgs) => res.json(msgs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const newMsg = new Msg({ name, email, subject, message });
  newMsg
    .save()
    .then(() => res.json("Success"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  const _id = req.params.id;
  Msg.deleteOne({ _id: _id })
    .then(() => res.json("Message deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
