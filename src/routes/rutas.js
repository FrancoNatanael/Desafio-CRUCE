const express= require('express');
const router= express.Router();

let controller = require('../controllers/controllerPrincipal.js')


router.get('/',controller.index)
router.get('/products',controller.list)



module.exports = router;