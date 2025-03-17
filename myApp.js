require('dotenv').config();
let bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()

    next()
}, (req, res) => {
    res.send({time: req.time})
})

app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word})
})

app.use('/name', (req, res) => {
    res.json({name: `${req.query.first} ${req.query.last}`})
})
























module.exports = app;
