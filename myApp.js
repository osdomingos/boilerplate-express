require('dotenv').config();
let express = require('express');
let app = express();

const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});

const absolutePath2 = __dirname + "/public";
app.use("/public", express.static(absolutePath2));

app.get('/json', (req, res) => {

    if (process.env["MESSAGE_STYLE"] == 'uppercase') {
        res.json({ "message": "HELLO JSON" })
    } else {
        res.json({ "message": "HELLO JSON" })
    }
})


























module.exports = app;
