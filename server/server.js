const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

var cors = require('cors');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connection successfull!")
    }).catch((err) => {
        console.log(err);
    });



app.listen(process.env.PORT, () => {
    console.log("Backend server is running!");
});