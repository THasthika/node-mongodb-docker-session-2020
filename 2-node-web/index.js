const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const db = require('./db');

const PORT = 80;

const app = express();

// set template engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/templates'));

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use('/assets', express.static('assets'))

// show todo_list page
app.get('/', function(req, res) {
    db.getTodos(function (todos) {
        res.render('todo_list', {
            todos: todos
        });
    });
});

// show single todo page
app.get('/todo/:id', function(req, res) {
    const id = req.params.id;
    db.getTodo(id, function(todo) {
        res.render('todo_detail', {
            todo: todo
        })
    })
})

// show update todo page
app.get('/todo/:id/update', function(req, res) {
    const id = req.params.id;
    db.getTodo(id, function(todo) {
        res.render('todo_update', {
            todo: todo
        })
    })
})

// show create todo page
app.get('/create', function(req, res) {
    res.render('todo_create');
})

// create todo
app.post('/create', function(req, res) {
    const title = req.body.title;
    const todo = {
        title: title,
        done: false
    }
    db.createTodo(todo, function(todo) {
        res.redirect('/');  
    })
})

// update a todo given id
app.post('/todo/:id/update', function(req, res) {
    const id = req.params.id;
    const title = req.body.title;
    const done = !!req.body.done;
    if (!id) {
        throw new Error("Invalid ID");
    }
    db.updateTodo(id, {title: title, done: done}, function(todo) {
        res.redirect('/');
    });
});


// remove a todo given id
app.post('/todo/:id/delete', function(req, res) {
    const id = req.params.id;
    if (!id) {
        throw new Error("Invalid ID");
    }
    db.deleteTodo(id, function() {
        res.redirect('/');
    });
})

// serve app
app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});