const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const todo = require("./todo");

const PORT = 80;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use("/todo", todo);

app.use((req, res, next) => {
    next(new Error("Page Not Found!"));
})

app.use((err, req, res, next) => {
    console.error(err);
    res.json({
        status: "error"
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})