// routes/lists.js
const express = require('express');
const router = express.Router();
const List = require('../models/List');

// Alle Listen abrufen
router.get('/', async (req, res) => {
    const lists = await List.find().populate('cards');
    res.json(lists);
});

// Neue Liste erstellen
router.post('/', async (req, res) => {
    const list = new List(req.body);
    await list.save();
    res.json(list);
});

module.exports = router;
