const Blog = require('./blog');

const blogByTitle = (title) => {
    return Blog.find({title: title}).exec();
}

const blogByAuthor = (id) => {
    return Blog.find({author: id}).populate('author').exec();
}

const blogsSortedByCreatedAt = () => {
    return Blog.find({}).sort('-date').exec();
}

const blogTitleByAuthor = (id) => {
    return Blog.find({author: id}).select({title: 1, description: 1}).exec();
}

module.exports = {
    blogByTitle, blogByAuthor, blogsSortedByCreatedAt, blogTitleByAuthor
}

