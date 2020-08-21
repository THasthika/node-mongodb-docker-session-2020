const mongoose = require('mongoose');
const models = require('./models');

mongoose.connect('mongodb://todouser:todopwd@db:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true});

function getTodos(callback) {
    models.Todo.find(function(err, res) {
        if (err) {
            console.error(err);
        }
        callback(res);
    })
}

function getTodo(id, callback) {
    models.Todo.findOne({ _id: id }, function(err, res) {
        if (err) {
            console.error(err);
        }
        callback(res);
    })
}

function createTodo(todo, callback) {
    if (!todo.done) {
        todo.done = false;
    }
    const todoInst = new models.Todo(todo);
    todoInst.save(function(err, res) {
        if (err) {
            console.error(err);
        }
        callback(res);
    })
}

function updateTodo(id, todo, callback) {
    models.Todo.findOneAndUpdate({ _id: id }, { title: todo.title, done: todo.done }, function(err, doc, res) {
        if (err) {
            console.error(err);
        }
        callback(res);
    })
}

function deleteTodo(id, callback) {
    models.Todo.findOneAndRemove({ _id: id }, function(err, res) {
        if (err) {
            console.error(err);
        }
        callback();
    })
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}