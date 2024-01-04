const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const moragan = require('morgan');
const connectDB = require('./config/db');
const { route } = require('./routes/userRoutes');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();
//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(moragan('dev'))

//routes
app.use("/api/v1/user", require("./routes/userRoutes"))

//port
const port = process.env.PORT || 5000

//listen port
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_MODE} mode on ${process.env.PORT}` );
});


