const translateController= require('./translateController');
const express= require('express');
const router= express.Router();

router.post('/',translateController.translateText);

module.exports=router;