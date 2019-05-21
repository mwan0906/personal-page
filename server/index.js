const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

module.exports = app;