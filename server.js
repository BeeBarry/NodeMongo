require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI")
})


app.post("/blogpost", (req, res) => {
    res.send("this is postrequest")
});


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
});