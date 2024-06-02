//const express = require ("express")
//const connectDatabase = require("./src/database/db")
//const userRoute = require("./src/routes/user.route")


import express from "express";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";

dotenv.config();

const app = express();

const port= 3000 || process.env.PORT ;

connectDatabase();

app.use(express.json());

app.use("/user", userRoute);


//routes
  //method http
    //get- catch a info
    //post-  create a info
    //put- change the info
    //path- change a part of info
    //delete- delete the info
  //name
  //function (callback)


//app.get("/", (req,res)=>{
 //res.send(" mono")
//})

app.listen(port,()=> console.log(`Server started on the port ${port}`))

