const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    title: String,
    done: Boolean
});

module.exports = {
    Todo: mongoose.model('Todo', todoSchema)
}