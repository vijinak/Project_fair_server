// import dotenv- to load environmental variable
require('dotenv').config()

// import express
const express = require('express')

//import cors
const cors = require('cors') 

//import router
const router = require('./routes')


//import connection
require('./connection')

//create express server
//Creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer= express()


//create corss server 
 //use -cors to communicate view 
pfServer.use(cors())

//server should use json method - it returns a middle ware which can parse json formate
pfServer.use(express.json())


//use routers
pfServer.use(router)

//to export uploaded folder from the server side to use in the clint side
//first argument should  the name in which we are using the folder in the client side
//second arg - static  method to export the folder
//static meethod should have the path ofthe export folder
pfServer.use('/uploads',express.static('./uploads'))



// set port for the server
PORT =4010 ||  process.env.PORT

//listen  to the  port  - to resolve the reqeust
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number : ${PORT}`);
})

//get request
// pfServer.get('/',(req,res)=>{
//     //logic
//     res.send('get request recived')
// })

// //post requeste
// pfServer.post('/',(req,res)=>{
//     //logic
//     res.send('post request recived')
// })


//put requeat
// pfServer.put('/',(req,res)=>{
//     //logic
//     res.send('put request recived')
// })