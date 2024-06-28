// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Verbindung zur MongoDB-Datenbank
mongoose.connect('mongodb://localhost:27017/trello-clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routen
const boardsRoute = require('./routes/boards');
const listsRoute = require('./routes/lists');
const cardsRoute = require('./routes/cards');

app.use('/api/boards', boardsRoute);
app.use('/api/lists', listsRoute);
app.use('/api/cards', cardsRoute);

// Start des Servers
app.listen(5000, () => {
    console.log('Server läuft auf Port 5000');
});

const path = require('path');

// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// Produktions-Modus
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
