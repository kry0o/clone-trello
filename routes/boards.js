// routes/boards.js
const express = require('express');
const router = express.Router();
const Board = require('../models/Board');

// Alle Boards abrufen
router.get('/', async (req, res) => {
    const boards = await Board.find().populate('lists');
    res.json(boards);
});

// Neues Board erstellen
router.post('/', async (req, res) => {
    const board = new Board(req.body);
    await board.save();
    res.json(board);
});

module.exports = router;
// JavaScript source code
