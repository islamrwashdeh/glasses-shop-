const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.Controller');
const verifyToken = require('../ middlewares/auth');


router.post('/frames',verifyToken,adminController.createFrame);
router.post('/lenses', verifyToken,adminController.createlenses);



module.exports = router;


