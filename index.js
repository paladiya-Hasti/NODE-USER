const express = require('express');
const dbconnect = require('./Config/db');
const UserRoute = require('./Routes/User.Router');
const app = express();

app.use(express.json());
require("dotenv").config();

app.use("/Users",UserRoute)

const PORT = process.env.PORT || 5060 ;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    dbconnect();
});