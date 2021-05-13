const {Op} = require('sequelize');
const { User, Job } = require("../model");

exports.getUser = async (body) => {
    try {
     const listUser = await User.findOne({
         where: {
             username: body.username,
             password: body.password
         },
         });
     console.log('Đăng nhập thành công');
     return listUser;
    } catch (error) {}
 }

exports.createAccount = async (body) => {
    const newAccount = await User.create({ ...body });
    return newAccount;
}
