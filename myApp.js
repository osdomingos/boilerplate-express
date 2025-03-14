require('dotenv').config()
let express = require('express');
let app = express();

/*
app.get("/", (req, res) => {
    res.send("Hello Express")
})
*/

const absolutePath = __dirname + "/views/index.html"

app.get("/", (req, res) => {
    res.sendFile(absolutePath)
})

const absolutePath2 = __dirname + "/public"

app.use("/public", express.static(absolutePath2));

app.get('/json', (req, res) => {
    let response = ''
    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = 'Hello json'.toUpperCase()
    } else {
        response = 'Hello json'
    } 
    res.json({"message": response})
})

































 module.exports = app;
