const express= require('express');
const router= express.Router();

let controller = require('../controllers/controllerPrincipal.js')

let upload = require('../middleware/multer')


router.get('/',controller.home)
router.get('/index',controller.index)
router.get('/products',controller.list)
router.get('/form',controller.form)




module.exports = router;