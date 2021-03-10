const mongoose = require('mongoose')
const Users = require('./models/users')

const URI = "mongodb+srv://admin:duynguyen@kingston.zjhaa.mongodb.net/kingston?retryWrites=true&w=majority"

const connectDB = async () => {
  await  mongoose.connect(URI, 
    {useNewUrlParser: true,
    useUnifiedTopology: true  });
  console.log('db connected..!')
}

module.exports = connectDB;
