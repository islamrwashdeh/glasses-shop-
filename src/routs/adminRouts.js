const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.Controller');
// const verifyToken = require('../ middlewares/auth');


router.post('/frames',adminController.createFrame);
router.post('/lenses', adminController.createlenses);



module.exports = router;


