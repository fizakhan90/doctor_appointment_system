const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb+srv,//Ayesha:kyZAqr3hxobjtlER@cluster0.b5w0edv.mongodb.net/);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white))
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
