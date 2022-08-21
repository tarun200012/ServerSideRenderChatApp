const express = require('express');
const router= express.Router();
const userRouter = require("./users")
const homecontroller = require('../controllers/homecontroller');
console.log("Router UP !");

router.get('/',homecontroller.root);
router.use('/users',userRouter);

module.exports=router;