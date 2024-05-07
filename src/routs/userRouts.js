const express = require('express');

const router = express.Router();
const UserController = require('../controllers/userController');
const { userService } = require('../services');

// login and register routs  for users and admins  
router.post('/', UserController.createUser);
router.post('/logIn',UserController.loginUser)

 

// user  routs 

router.get('/frames',UserController.getActiveFrames) // to get freams list 

router.get('/lenses',UserController.getAllLenses)  //  to get lenses  list  

router.post('/glasses',UserController.createCustomGlasses)



module.exports = router;