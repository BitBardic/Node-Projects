const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side!');
});

var port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});