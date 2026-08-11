const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());   

const Article = require("./Article");

mongoose.connect("mongodb://yousuf0476_db_user:Ixo3ug9NFv8QlZXg@ac-qyulwoo-shard-00-00.eiyvlmd.mongodb.net:27017,ac-qyulwoo-shard-00-01.eiyvlmd.mongodb.net:27017,ac-qyulwoo-shard-00-02.eiyvlmd.mongodb.net:27017/?ssl=true&replicaSet=atlas-97pyml-shard-0&authSource=admin&appName=Cluster0") 
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err); 
    });


app.get("/hello-numbers", (req, res) => {
 let numbers = "";
 for (let i = 0; i <= 100; i++) {
     numbers += i + "--";
 }
 // تم تعديل هذا الجزء ليرسل بيانات بصيغة JSON تناسب تصميم هندسة المايكروسيرفس والباك إند
 res.json({ name: "yousuf", numbers: numbers });
});



app.get("/findSummation/:number1/:number2", (req, res) => {
    const num1 = req.params.number1;
    const num2 = req.params.number2;

    const total = Number(num1) + Number(num2);
    res.send(`the total is ${total}`);
});


app.get("/say-body-hello", (req, res) => {
res.json({
    name: req.body.name,
    age: req.query.age,
    language: "Arabic",
});
});
 


app.get("/welcome", (req, res) => {
    res.send("Welcome yousuf!");
}); 



app.get("/", (req, res) => {
    res.send("hello in node js project!");
}); 



app.get("/test", (req, res) => {
    res.send("This is a test route!");
});



app.post("/add-comment", (req, res) => {
    res.send(" POST Comment added work!");
});



app.put("/update-comment", (req, res) => {
    res.send(" PUT Comment updated work!");
});



app.delete("/delete-comment", (req, res) => {
    res.send(" DELETE Comment deleted work!");
});


//===============Article ANDPOINTS========================

app.post("/articles", async (req, res) => {
    const newArticle = new Article();
    const artTitle = req.body.articlrTitle;
    const artBody = req.body.articlrBody;


    newArticle.title = artTitle;
    newArticle.body = artBody;
    newArticle.number = 100;
    await newArticle.save();

    res.json(newArticle);
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});