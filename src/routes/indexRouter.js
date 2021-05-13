const route = require("express").Router();

const UserRouter = require('./user')
const JobRouter = require('./job')
const AuthRouter = require('./auth')

route.use('/user',UserRouter);
route.use('/job',JobRouter);
route.use('/auth',AuthRouter);

module.exports = route;