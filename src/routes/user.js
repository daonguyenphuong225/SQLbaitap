const express = require('express');
const route = express.Router();
const path = require('path')
const {User} = require('../controller')

route.put('/user',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await User.updateUser(body);
    res.json({data});
})

route.delete("/:userId",async (req,res) =>{
    const userId = req.params.userId;
    console.log(userId);
    const data = await User.deleteUser(userId);
    res.json({data});
})





route.delete("/user/:userId",async (req,res) =>{
    const userId = req.params.userId;
    console.log(userId);
    const data = await User.deleteUser(userId);
    res.json({data});
})
module.exports = route;