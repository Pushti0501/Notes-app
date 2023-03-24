const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//true--> Nested Objects(Correct)
//false--> Nested Objects(Not correct)
mongoose.connect("mongodb+srv://pushti:0501pgs@cluster0.6rcfw1u.mongodb.net/?retryWrites=true&w=majority").then(
    function () {
        app.get("/", function (req, res) {
            const response = { message: "API Works" };
            res.json(response);
        });
        const noteRouter=require("./routes/Note");
        app.use("/notes",noteRouter)
       
    }
);
const PORT=process.env.port || 5000;
app.listen(5000, function () {
    console.log("Connected at Port:5000");
});

