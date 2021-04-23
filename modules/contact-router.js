const express = require("express");
//router
const router = express.Router();

router.use((req, res, next)=>{ 
    res.send("<h1>any children</h1>");
}) 
router.get("/me",(req, res, next)=>{ 
    res.send("<h1>me</h1>");
}) 
router.get("/company",(req, res, next)=>{ 
    res.send("<h1>company</h1>");
}) 
// to let the exports works as function instead of object
module.exports = router;

// if I used in app.js like this
// app.use(contact_router) istead of app.use("/contact",contact_router) 
// I have to use the router middleware like this
/*
router.get("contact/me",(req, res, next)=>{ 
    res.send("<h1>me</h1>");
}) 
router.get("contact/company",(req, res, next)=>{ 
    res.send("<h1>company</h1>");
}) */