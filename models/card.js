// models/Card.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: String,
    description: String,
    labels: [String],
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
