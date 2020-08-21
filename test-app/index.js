const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World 123");
});

app.listen(8080);
console.log("App is Listening on port 8080");
