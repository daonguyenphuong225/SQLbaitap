const {Op} = require('sequelize');
const {User,Job} = require("../model");

exports.getJob = async ({limit = 1, page =1, key =""}) => {
    try {
     const listJob = await Job.findAll({
         where: {
             title: {[Op.substring]: key},
         },
         limit: Number(limit),
             offset: Number((page - 1) * limit),
             include:[{model: "user"}]
         });
     return listJob;
    } catch (error) {}
 }

exports.createJob = async (body) => {
    const newJob = await Job.create({ ...body });
    return newJob;
}

exports.updateJob = async(body) =>{
    try {
        const{id,title,salary,address} = body;
        const job = await Job.findByPk(id);
        job.title = title;
        job.salary = salary;
        job.address = address;
        await job.save();
        return job
    } catch (error) {}
}

exports.deleteJob = async (jobId) =>{
    try {
        const result = await Job.destroy({where: {id : jobId}});
        return result;
    } catch (error) {}
}