const mongoose = require('mongoose')
const Users = require('../db/models/user')

const URI = "mongodb://localhost:27017/test"

const connectDB = async () => {
  await  mongoose.connect(URI, 
    {useNewUrlParser: true,
    useUnifiedTopology: true  });
  console.log('db connected..!')
}

module.exports = connectDB;