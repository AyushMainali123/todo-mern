let router = require("express").Router();
let Todo = require("../model/todo.model");

router.get("/", (req, res) => {
  Todo.find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  Todo.findById(id)
    .then((response) => res.json(response))
    .catch((err) => res.status("404").json(err));
});

router.post("/add", (req, res) => {
  let todo = req.body;
  let newTodo = new Todo(todo);
  newTodo
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.status("400").json(err));
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

module.exports = router;
