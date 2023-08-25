const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set("strictQuery", false);
console.log(process.env.MONGO_URL)
const connection = mongoose.connect(process.env.MONGO_URL)
module.exports = connection;