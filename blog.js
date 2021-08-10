const Mongoose = require('mongoose');

const blogSchema = Mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        minLength: 100
    },
    author: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
}, {timestamps: true});

module.exports = Mongoose.model('blog', blogSchema);