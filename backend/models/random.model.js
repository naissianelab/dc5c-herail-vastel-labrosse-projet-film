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
            type: String,
        },
        vote_average: {
            type: Number,
        },
        title: {
            type: String,
            required : true
        }
    }
)

module.exports = mongoose.model('Aléatoire', randomSchema);