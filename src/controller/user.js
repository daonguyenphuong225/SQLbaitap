const {User} = require("../model");

exports.updateUser = async(body) =>{
    try {
        const{id,username,password,fullname,age,email,jobId} = body;
        const user = await User.findByPk(id);
        user.username = username;
        user.password = password;
        user.fullname = fullname;
        user.age = age;
        user.email = email;
        user.jobId = jobId;
        
        await user.save();
        return user
    } catch (error) {}
}

exports.deleteUser = async (userId) =>{
    try {
        const result = await User.destroy({where: {id : userId}});
        return result;
    } catch (error) {}
}