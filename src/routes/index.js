const express = require('express');
const router= express.Router();
const homecontroller = require('../controllers/homecontroller');
console.log("Router UP !");

router.get('/',homecontroller.root);

module.exports=router;