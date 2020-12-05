let router = require("express").Router();
let User = require("../model/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err.message));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err.message));
});

router.post("/add", (req, res) => {
  let newUser = new User({ ...req.body });
  newUser
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});


router.delete("/delete/:id/", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
