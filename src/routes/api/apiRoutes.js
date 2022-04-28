const express= require('express');
const router= express.Router();

let controllerApi = require('../../controllers/api/productsApi')


router.get('/',controllerApi.list)




module.exports = router;