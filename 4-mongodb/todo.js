const express = require('express')

const db = require('./db');

// POST /todo - create a todo
function createTodo(req, res) {
    const title = req.body.title;
    db.createTodo({ title: title }, (todo) => {
        res.json(todo);
    })
}

// GET /todo - get all todos
function getTodos(req, res) {
    db.getTodos((todos) => {
        res.json(todos);
    })
}

// GET /todo/:id - get single todo
function getTodo(req, res) {
    const id = req.params.id;
    db.getTodo(id, (todo) => {
        res.json(todo);
    })
}

// PUT /todo/:id - update a todo
function updateTodo(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const done = req.body.done;
    const todo = {
        title: title,
        done: done
    }
    db.updateTodo(id, todo, (todo) => {
        res.json(todo);
    });
}

// DELETE /todo/:id - delete a todo
function deleteTodo(req, res) {
    const id = req.params.id;
    db.deleteTodo(id, () => {
        res.json({ status: 'ok' });
    })
}

const router = express.Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;