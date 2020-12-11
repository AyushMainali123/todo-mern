let router = require("express").Router();
let Todo = require("../model/todo.model");
let User = require("../model/user.model");

router.get("/", (req, res) => {
  Todo.find()
    .populate("user")
    .exec()
    .then(async (response) => {
      return res.json(response);
    })
    .catch((err) => res.json(err));
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  return await Todo.findById(id).populate("user")
});

router.post("/add", async (req, res) => {
  let { user, item, description } = req.body;
  const newUser = await User.findOne({ name: req.body.user });
  console.log({ username: newUser.name });
  const startDate = new Date(req.body.startDate);
  // console.log({ user, item, description, startDate });
  let newTodo = new Todo({ user: newUser, item, description, startDate });
  newTodo
    .save()
    .then((response) => {
      console.log("%c Response", "font-weight: bold; color: green", response);
      return res.json(response);
    })
    .catch((err) => {
      console.log(err);
      return res.status("400").json(err);
    });
});

router.put("/update/:id/", (req, res) => {
  let updated = req.body;
  Todo.findByIdAndUpdate(req.params.id, updated)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Todo.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/deleteByUserName/:name", (req, res) => {
  let user = req.params.name;
  console.log({ user });
  Todo.deleteMany({ user })
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json(err));
});
module.exports = router;
