const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
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
            type: String,
        },
        vote_average: {
            type: Number,
        }
    }
)

module.exports = mongoose.model('Movies', movieSchema);