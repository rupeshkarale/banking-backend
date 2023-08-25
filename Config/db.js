const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set("strictQuery", false);
const connection = mongoose.connect(process.env.MONGO_URL)
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/banking");
// const connection = mongoose.connect(`mongodb+srv://banking:${dbPassword}@cluster0.yzilnkf.mongodb.net/?retryWrites=true&w=majority`)
module.exports = connection;