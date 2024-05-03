const mongoose = require('mongoose');

const randomSchema = mongoose.Schema(
    {
        original_title: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        genre_ids: {
            type: [Number],
        },
        vote_average: {
            type: Number,
        }
    }
)

module.exports = mongoose.model('Aleatoire', randomSchema);