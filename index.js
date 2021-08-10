const Mongoose = require('mongoose');
const User = require('./user');
const UserQuery = require('./userModelImpl');
const Blog = require('./blog');
const BlogQuery = require('./blogModelImpl');

const connect = () => {
    return Mongoose.connect('mongodb://localhost:27017/UnacademyMongoDemo');
}




connect()
.then(async connection => {
    console.log('Mongo DB Connection Setup Done!!');

    // Just For Demo
    await User.deleteMany({});
    // await Blog.deleteMany({});
    //

    const user = await User.create({
        firstName: 'Sanket',
        lastName: 'Singh',
        email: 'ss@gmail.com'
    });
    console.timeLog(user);

    await User.create([
        {
            firstName: 'Sarthak',
            lastName: 'Jain',
            email: 'sj@gmail.com'
        }, 
        {
            firstName: 'Upkar',
            email: 'u@gmail.com',
            underAge: true
        }
    ]);

    console.log("******")
    const u1 = await UserQuery.getAllUsers();
    const u2 = await UserQuery.getUserById(user.id);
    const u3 = await UserQuery.updateUserByID(user.id, {underAge: true});
    console.log(u1);
    console.log(u2);
    console.log(u3);


    console.log("*********************************");

    const b1 = await Blog.create({
        title: 'New Blog 10',
        description: 'This is my latest blog please check it out !!!',
        author: user.id
    });

    console.log(b1);

    const b2 = await BlogQuery.blogByAuthor(user.id);
    console.log(b2);


    console.log("*********************************");
    const response = await BlogQuery.blogsSortedByCreatedAt();
    // console.log(response);


    const res = await BlogQuery.blogTitleByAuthor(user.id);
    console.log(res);

})
.catch(err => console.log(err));