// routes/cards.js
const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Alle Karten abrufen
router.get('/', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// Neue Karte erstellen
router.post('/', async (req, res) => {
    const card = new Card(req.body);
    await card.save();
    res.json(card);
});

module.exports = router;
// JavaScript source code
