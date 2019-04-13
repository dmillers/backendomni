const mongoose = require('mongoose')

const Box = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('Box', Box);