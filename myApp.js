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
    let message = 'Hello json'

    if (process.env.MESSAGE_STYLE === 'uppercase') {
      return res.json({"message": message.toUpperCase()})
    }
    
    return res.status(200).json({"message": message})
  })




























 module.exports = app;
