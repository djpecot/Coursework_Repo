const mongoose = require('mongoose')

const Task = mongoose.model('Task', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true

    },
    completed: {
        type: Boolean,
        default: false,
        required: false
    }
}, {timestamps: { createdAt: 'created_at' }}))

module.exports = Task