const express = require('express');
const userController = require('../controllers/usercontroller');

const router = express.Router();

router.get('/profile',userController.profile);

 module.exports = router;