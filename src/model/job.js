const sequelize = require ("../config/sql-connection");
const {DataTypes} = require("sequelize");


const Job = sequelize.define(
    "Job",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        salary: {type: DataTypes.INTEGER},
        address :DataTypes.STRING
    },
    {
        freezeTableName:true,
    }
)

module.exports = Job;