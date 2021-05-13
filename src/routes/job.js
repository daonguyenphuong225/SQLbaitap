const express = require('express');
const route = express.Router();
const path = require('path')
const {Job} = require('../controller')

route.get('/',async(req,res)=>{
    const query = req.query;
    console.log(query);
    const data = await Job.getJob(query);
    res.json(data)
})
route.post('/',async(req,res)=>{
    const body = req.body;
    const data = await Job.createJob(body);
    res.json({data});
})

route.put('/',async(req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Job.updateJob(body);
    res.json({data});
})





route.delete("/{:jobId}",async (req,res) =>{
    const jobId = req.params.jobId;
    const data = await Job.deleteJob(jobId);
    res.json({data});
})
module.exports = route;