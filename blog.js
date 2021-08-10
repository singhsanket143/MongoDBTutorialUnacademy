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
        minLength: 10
    },
    author: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date: { type: String, default: Date }
}, {timestamps: true});

blogSchema.post('save', function(doc) { // trigger
    console.log('%s blog has been saved', doc._id);
});

module.exports = Mongoose.model('blog', blogSchema);