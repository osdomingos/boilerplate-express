require('dotenv').config();
let express = require('express');
let app = express();

const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

const absolutePath2 = __dirname + "/public";
app.use("/public", express.static(absolutePath2));

/*
app.get('/json', (req, res) => {

    if (process.env["MESSAGE_STYLE"] == 'uppercase') {
        res.json({"message": "HELLO JSON"})
    } else {
        res.json({"message": "Hello json"})
    }
})
*/

/*
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
*/

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()

    next()
}, (req, res) => {
    res.send({time: req.time})
})


























module.exports = app;
