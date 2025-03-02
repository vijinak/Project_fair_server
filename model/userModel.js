//import mongoose 
const  mongoose= require('mongoose')


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String
    },
    linkdin:{ 
        type:String

    },
    profile:{
        type:String
    }
})


const users = mongoose.model("users",userSchema)

//export collection name "users"
module.exports = users 