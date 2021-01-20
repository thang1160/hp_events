const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const connectDB = require('./DB/connection')

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// app.get('/', (req, res) => {
//     // res.send(`<h1>Listening on ${ PORT }</h1>`);
//     res.sendFile(path.join((__dirname,'public','index.html')))
// })

module.exports = app;