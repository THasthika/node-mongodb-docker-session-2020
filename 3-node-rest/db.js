let nextId = 1;
const todos = {};

function getTodos(callback) {
    callback(Object.values(todos));
}

function getTodo(id, callback) {
    callback(todos[id]);
}

function createTodo(todo, callback) {
    todo.id = nextId++;
    if (!todo.done) {
        todo.done = false;
    }
    todos[todo.id] = todo;
    callback(todo);
}

function updateTodo(id, todo, callback) {
    todo.id = id;
    todos[id] = todo;
    callback(todo);
}

function deleteTodo(id, callback) {
    if (!(id in todos)) {
        callback();
    }
    delete todos[id];
    callback();
}

module.exports = {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}