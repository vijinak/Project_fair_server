// import express
const express = require('express')

//import userController file 
const userController = require('./controller/userController')

//import projectController
const projectController = require('./controller/projectController')

//import jwtmiddleware
const jwt = require('./middleware/jwtMiddleware')

//already imported multer
const multerConfig = require('./middleware/multerMiddleware')

 
//2) create obeject for router class
 const router = new express.Router()

 //3) set up the path for  each request from view

    //register
      router.post('/register',userController.registerController)
    
      //login
      router.post('/login',userController.loginController)

      //addproject
      router.post('/addproject',jwt,multerConfig.single('projImage'),projectController.addProjectController)

      //allproject
      router.get('/allprojects',jwt,projectController.getAllProjectsController)

      //home project
      router.get('/homeproject',projectController.homeProjectsController)

      //userProject
      router.get('/userProject',jwt,projectController.userProjectController)

      //delete project
      router.delete('/delete/:id',projectController.deleteProjectController)

      //edit project
      router.put('/edit-project/:id',jwt,multerConfig.single('projImage'),projectController.editProjectController)


      //editProfile
      router.put('/edit-profile',jwt,multerConfig.single('profile'),userController.editProfileController)

 //4)export  the router
 module.exports = router
 