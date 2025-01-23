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


mongoose.connect("mongodb+srv://Barry4:123456admin@barryapi.v74z3.mongodb.net/Products-API?retryWrites=true&w=majority&appName=BarryAPI")
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
});