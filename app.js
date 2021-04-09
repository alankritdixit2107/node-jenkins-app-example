const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!dsadasdsd')

var server = app.listen(3000, () => {
    console.log("Listening on alamdasdrt " + server.address().port + "...");
});

module.exports = server;
