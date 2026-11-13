// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => res.send('Updated automatically by GitHub Actions!'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
