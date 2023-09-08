// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("hello world!!!!!");
});

app.listen(3000, function() {
    console.log("server menyala");
});