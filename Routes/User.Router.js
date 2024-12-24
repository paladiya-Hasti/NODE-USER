const {Router} = require('express');
const { GetUsers, GetUserById, CreateUser, UpdateUser, DeleteUser } = require('../Controllers/User.Controllers');


const UserRoute = Router();

UserRoute.get("/",GetUsers)

UserRoute.get("/:userId",GetUserById)

UserRoute.post("/",CreateUser)

UserRoute.patch("/:userId",UpdateUser)

UserRoute.delete("/:userId",DeleteUser)

module.exports = UserRoute;