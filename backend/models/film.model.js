const mongoose = require('mongoose');

const filmSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        
    }
)

module.exports = mongoose.model('Categories', categorySchema);