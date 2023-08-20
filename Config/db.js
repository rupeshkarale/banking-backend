const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set("strictQuery", false);
console.log(process.env.MONGO_URL)
const connection = mongoose.connect(process.env.MONGO_URL)
// const connection = mongoose.connect('mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/assignmentbank?retryWrites=true&w=majority');
module.exports = connection;