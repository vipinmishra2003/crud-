const express=require('express');
const dbConnection = require('./connection/connection');
const authRouter=require('./routers/user.route')
const model=require('./model/user.model')
const app=express();
const port=2000;

dbConnection();

app.use("/auth", authRouter)

app.listen(port, ()=>{
    console.log("Server up and running")
})