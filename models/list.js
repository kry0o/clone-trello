// models/List.js
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
});

const List = mongoose.model('List', listSchema);
module.exports = List;
// JavaScript source code
