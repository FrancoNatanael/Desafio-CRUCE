const express= require('express');
const router= express.Router();

let controllerApi = require('../../controllers/api/productsApi')
let upload = require('../../middleware/multer')

router.get('/',controllerApi.list)

router.post('/create',upload.single('image'),controllerApi.create)




module.exports = router;