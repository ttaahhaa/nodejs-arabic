const express = require("express");
const path = require("path");

const body = require("body/form")
const bodyparser = require("body-parser");
const bodyParserMiddleWare = bodyparser.urlencoded({
    extended: true
});
const app = express()
app.set("view engine", "ejs")
app.set("views", "views")

app.use(express.static(path.join(__dirname)))

app.get('/', (req, res, next)=>{
    res.render('index.ejs',{
        pageTitle:"home"
    })
});

app.post('/',bodyParserMiddleWare, (req,res,next)=>{
    res.render("index",{
        username:req.body.username,
        age:req.body.age,
        pageTitle:"homePage"
    })
})
app.listen(3000,()=>{console.log("listining on 3000 port")});



