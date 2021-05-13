const express = require('express');
const route = express.Router();
const path = require('path')
const {Auth} = require('../controller')

route.post('/login',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Auth.getUser(body);
    res.json({data});
})
route.post('/register',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Auth.createAccount(body);
    res.json({data});
})

module.exports = route;