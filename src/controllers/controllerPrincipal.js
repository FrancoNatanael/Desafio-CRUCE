const jsonDb = require('./json')
const productModel = jsonDb('products')

let controllerPrincipal = {

    index: (req,res) =>{
        let products = productModel.all();
        res.render('index',{products})
    },
    list: (req,res) =>{
        res.render('productList')
    }
}


module.exports = controllerPrincipal;